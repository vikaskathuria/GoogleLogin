import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions,Switch, TouchableOpacity, Image, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Icon } from 'react-native-elements'
export const Button_Margin = height / 50;
export const Margin = width / 20;


export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isEnabled:true
        }
    }
    
    toggleSwitch(val) {
        console.log('vallll', val)
        this.setState({ isEnabled: val })

    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.TouchableOpacityStyle}
                >
                    <Icon
                        name="plus"
                        type="antdesign"
                        color={"white"}
                        size={height / 20}
                    />
                </TouchableOpacity>



                <View style={{ width: width, padding: width / 30, flexDirection: 'row',  }}>
                    <View style={{ width: height / 10, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Icon name="menu" type="entypo" size={height / 25} color="#1CBBB4" />
                    </View>
                    <View style={{ borderRadius: height / 20, backgroundColor: 'lightgrey', flex: 1, paddingVertical: height / 90, flexDirection: 'row', }}>
                        <View style={{ width: height / 20, justifyContent: 'center', alignItems: 'center', }}>
                            <Icon name="search1" type="antdesign" size={height / 45} color="grey" />
                        </View>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: height / 50, color: "grey" }}>search</Text>
                        <View style={{ width: height / 20, justifyContent: 'center', alignItems: 'center', }}>
                            <Icon name="keyboard-voice" type="material" size={height / 45} color="#1CBBB4" />
                        </View>
                    </View>
                    <View style={{ width: height / 10, justifyContent: 'center', alignItems: 'flex-end', }}>
                        <Icon name="bell" type="evilicon" size={height / 25} color="#1CBBB4" />

                    </View>
                </View>

                <View style={{ flex: 3 }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: height / 30, justifyContent:'center' }}>

                        <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
                            <View style={{ height: 55, width: 55, borderRadius: 55 / 2, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#1CBBB4' }}>
                                <Icon name='user' type='antdesign' color={"black"} size={height / 30} />
                            </View>
                        </View>
                        <View style={{flexDirection:'column'}}>
                         <Text style={{marginHorizontal:width/30,fontWeight:'bold',fontSize:height/30,color:'grey'}}>Hello!</Text>
                         <Text style={{marginHorizontal:width/30,fontWeight:'bold',fontSize:height/44,color:'grey'}}>Dr. Anuj sharma!</Text>
                         <View style={{ flexDirection:'row',marginTop:width/30, }}>
                         <View style={{marginHorizontal:width/30, justifyContent: 'center', alignItems: 'center', }}>
                         <Text style={{fontWeight:'bold',fontSize:height/44,color:'grey'}}>Available</Text>

                            <Switch
                                trackColor={{ false: "red", true: "green" }}
                                thumbColor={"white"}
                                onValueChange={(val) => this.toggleSwitch(val)}
                                value={this.state.isEnabled}
                            />
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                         <Text style={{fontWeight:'bold',fontSize:height/44,color:'grey'}}>Emergency</Text>

                            <Switch
                                trackColor={{ false: "green", true: "red" }}
                                thumbColor={"white"}
                                onValueChange={(val) => this.toggleSwitch(val)}
                                value={this.state.isEnabled}
                            />
                        </View>

                        </View>

                         </View>
                    </View>

                </View>

                <View style={{ flex: 6.2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '95%', flex: 1 }}>
                        <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: "grey", padding: Button_Margin, flexDirection: 'row' }} >
                            <Icon name='calendar' type='antdesign' size={height / 45} color={"#1CBBB4"} />
                            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: Margin }}>
                                <Text style={{ fontSize: height / 48, fontWeight: '700', color: "#1CBBB4" }}>Next Appointment</Text>
                            </View>
                            <Text style={{ fontSize: height / 35, fontWeight: 'bold', color: "#1CBBB4" }}>N.A.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: "grey", padding: Button_Margin, flexDirection: 'row' }} >
                            <Icon name='newspaper-o' type='font-awesome' size={height / 45} color={"#1CBBB4"} />
                            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: Margin }}>
                                <Text style={{ fontSize: height / 48, fontWeight: '700', color: "#1CBBB4" }}>Appointments</Text>
                            </View>
                            <Icon name='newspaper-o' type='font-awesome' size={height / 35} color={"#1CBBB4"} />

                            <Text style={{ fontSize: height / 35, fontWeight: 'bold', color: "#1CBBB4" }}> 0</Text>
                            <Text style={{ fontSize: height / 35, color: "#1CBBB4" }}> | </Text>

                            <Icon name='newspaper-o' type='font-awesome' size={height / 35} color={"#1CBBB4"} />

                            <Text style={{ fontSize: height / 35, fontWeight: 'bold', color: "#1CBBB4" }}> 0</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: "grey", padding: Button_Margin, flexDirection: 'row' }} >
                            <Icon name='logout' type='material-community' size={height / 45} color={"#1CBBB4"} />
                            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: Margin }}>
                                <Text style={{ fontSize: height / 48, fontWeight: '700', color: "#1CBBB4" }}>Payment Recieved</Text>
                            </View>
                            <Text style={{ fontSize: height / 35, fontWeight: 'bold', color: "#1CBBB4" }}>₹ 61002</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: "grey", padding: Button_Margin, flexDirection: 'row' }} >
                            <Icon name='user' type='antdesign' size={height / 45} color={"#1CBBB4"} />
                            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: Margin }}>
                                <Text style={{ fontSize: height / 48, fontWeight: '700', color: "#1CBBB4" }}>My Patients</Text>
                            </View>
                            <Text style={{ fontSize: height / 35, fontWeight: 'bold', color: "#1CBBB4" }}>206</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "grey", padding: Button_Margin, flexDirection: 'row' }} >
                            <Icon name='broadcast' type='octicon' size={height / 45} color={"#1CBBB4"} />
                            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: Margin }}>
                                <Text style={{ fontSize: height / 48, fontWeight: '700', color: "#1CBBB4" }}>Broadcast Message</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>
                <View style={{ flex: 0.8, backgroundColor: "#1CBBB4", flexDirection: 'row' }}>
                    <View style={{ flex: 2.5 }}>
                        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='home' type='antdesign' size={height / 30} color={"white"} />
                            <Text style={{
                                fontSize: height / 55,
                                color: "white"
                            }}>  HOME</Text>
                        </View>

                    </View>
                    <View style={{ flex: 2.5 }}>
                        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='message1' type='antdesign' size={height / 30} color={"white"} />
                            <Text style={{
                                fontSize: height / 55,
                                color: "white"
                            }}>  CHAT</Text>
                        </View>

                    </View>
                    <View style={{ flex: 2.5 }}>
                        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='broadcast' type='octicon' size={height / 30} color={"white"} />
                            <Text style={{
                                fontSize: height / 55,
                                color: "white"
                            }}>  REPORT</Text>
                        </View>

                    </View>
                    <View style={{ flex: 2.5 }}>
                        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='hospital-o' type='font-awesome' size={height / 30} color={"white"} />
                            <Text style={{
                                fontSize: height / 55,
                                color: "white"
                            }}>  CLINIK</Text>
                        </View>

                    </View>

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: "absolute",
        width: height / 14,
        height: height / 14,
        alignItems: "center",
        justifyContent: "center",
        right: height / 40,
        bottom: height / 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 100,
        },
        elevation: 4,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        zIndex: 100,
        backgroundColor: "#1CBBB4",
        borderRadius: height / 28,
        opacity: 0.9
    },


})

