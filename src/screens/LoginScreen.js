
// import React, { useState, useEffect } from 'react';
// import {
//     TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   Image,
//   Button,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import {
//   GoogleSigninButton,
//   GoogleSignin,
//   statusCodes
// } from '@react-native-community/google-signin';
// import firebase from 'react-native-firebase';
// export default  function LoginScreen ()  {
//   const [loggedIn, setloggedIn] = useState(false);
//   const [user, setUser] = useState([]);

//   _signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { accessToken, idToken } = await GoogleSignin.signIn();
//       setloggedIn(true);

//       const credential = firebase.auth.GoogleAuthProvider.credential(
//         idToken,
//         accessToken,
//       );
//       await firebase.auth().signInWithCredential(credential);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//         alert('Cancel');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         alert('Signin in progress');
//         // operation (f.e. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         alert('PLAY_SERVICES_NOT_AVAILABLE');
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };
//   function onAuthStateChanged(user) {
//     setUser(user);
//     console.log(user);
//     if (user) setloggedIn(true);
//   }
//   useEffect(() => {
//     GoogleSignin.configure({
//       scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
//       webClientId:
//         '818434695053-3hc0rsm662ejm4qllpe90ffcftcgmcfj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//       offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     });
//     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       firebase.auth()
//         .signOut()
//         .then(() => alert('Your are signed out!'));
//       setloggedIn(false);
//       // setuserInfo([]);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//     <KeyboardAwareScrollView
//         style={{ flex: 1, width: '100%' }}
//         keyboardShouldPersistTaps="always">
//         <Image
//             style={styles.logo}
//             source={require('../../assets/icon.png')}
//         />
//  <GoogleSigninButton
//                   style={{ width: 192, height: 48 }}
//                   size={GoogleSigninButton.Size.Wide}
//                   color={GoogleSigninButton.Color.Dark}
//                   onPress={()=>_signIn()}
//                 />  
//                   </KeyboardAwareScrollView>
// </View>
// );
// };

// const styles= StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     logo: {
//         flex: 1,
//         height: 120,
//         width: 90,
//         alignSelf: "center",
//         margin: 30
//     },
//     button: {
//         backgroundColor: '#788eec',
//         marginLeft: 30,
//         marginRight: 30,
//         marginTop: 20,
//         height: 48,
//         borderRadius: 5,
//         alignItems: "center",
//         justifyContent: 'center'
//     },
//     buttonTitle: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: "bold"
//     },
// })























import React, { useState,useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../firebase/config'
import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes
  } from '@react-native-community/google-signin';
//   import firebase from 'react-native-firebase';
  
export default function LoginScreen({navigation}) {
    const [loggedIn, setloggedIn] = useState(false);
    const [user, setUser] = useState([]);
  
   const _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const { accessToken, idToken } = await GoogleSignin.signIn();
        setloggedIn(true);
  
        const credential = firebase.auth.GoogleAuthProvider.credential(
          idToken,
          accessToken,
        );
        await firebase.auth().signInWithCredential(credential);
        const uid = user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .get()
            .then(firestoreDocument => {
              console.log("firestoreDocument",firestoreDocument);
  
                if (!firestoreDocument.exists) {
                    return;
                }
                const user = firestoreDocument.data()
                console.log("usssss",user);
                // navigation.navigate('Home', {user: user})
            })
  
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };
    function onAuthStateChanged(user) {
      setUser(user);
      console.log(user);
      
      if (user){setloggedIn(true);
  
          }
    }
    useEffect(() => {
      GoogleSignin.configure({
        scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
          '818434695053-3hc0rsm662ejm4qllpe90ffcftcgmcfj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      });
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
  
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
