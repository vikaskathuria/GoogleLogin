import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native'
import { firebase } from '../firebase/config'

import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes
} from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(false);

    const entityRef = firebase.firestore().collection('entities')

    // const userID = props.extraData.id

    const getToken = async () => {

        const jsonValue = await AsyncStorage.getItem('token')
        let user = JSON.parse(jsonValue)
        setUser(user)
        getAllQuery(user.id)

    }

    useEffect(() => {
        getToken()
    }, [])


    const getAllQuery = (userID) => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
        setTimeout(() => {
            setLoader(false)
        }, 500);

    }
    const onAddButton = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: user.id,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }

    }
    const onAddButtonPress = async () => {
        setLoader(true)
        await onAddButton()
        await getAllQuery(user.id)

    }

    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }
    const signOut = async () => {
        setLoader(true)
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        AsyncStorage.clear()
        props.navigation.navigate("Login")
        setLoader(false)

    };

    if (loader) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="orange" size="large" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 8, alignItems: 'center' }}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Add new entity'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEntityText(text)}
                        value={entityText}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>

                </View>

                {entities && (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={entities}
                            renderItem={renderEntity}
                            keyExtractor={(item) => item.id}
                            removeClippedSubviews={true}
                        />
                    </View>
                )}
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{
                    width: "80%", height: 47,
                    borderRadius: 5,
                    backgroundColor: '#788eec', alignItems: 'center', justifyContent: 'center'
                }} onPress={signOut}>
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})
