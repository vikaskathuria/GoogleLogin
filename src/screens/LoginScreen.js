import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions } from '@react-navigation/core';

import styles from './styles';
import { firebase } from '../firebase/config'
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
//   import firebase from 'react-native-firebase';

export default function LoginScreen({ navigation }) {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);


  const _signIn = async () => {
    setLoader(true)
    await GoogleSignin.signOut();
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken, user } = await GoogleSignin.signIn();
      setloggedIn(true);
      console.log("usssss", user);
      setUser(user)
      await AsyncStorage.setItem('token', JSON.stringify(user))
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      const usersRef = firebase.firestore().collection('users')
      await firebase.auth().signInWithCredential(credential);
      setLoader(false)
      navigation.dispatch(
        StackActions.replace('Home', { user: user }),
      );

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
        setLoader(false)

      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        setLoader(false)

        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        setLoader(false)

        // play services not available or outdated
      } else {
        // some other error happened
        setLoader(false)

      }
    }
  };
  const getToken = async () => {

    const jsonValue = await AsyncStorage.getItem('token')
    let user = JSON.parse(jsonValue)
    setUser(user)
    if (user) {
      navigation.dispatch(
        StackActions.replace('Home', { user: user }),
      );

    }
  }

  useEffect(() => {
    getToken()
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '818434695053-3hc0rsm662ejm4qllpe90ffcftcgmcfj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="orange" size="large" />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../assets/icon.png')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => _signIn()}>
          <Text style={styles.buttonTitle}>Log in with google</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  )
}
