import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppMainStack from './src/route';


const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const getToken = async () => {
    const jsonValue = await AsyncStorage.getItem('token')
    let user = JSON.parse(jsonValue)
  }

  useEffect(() => {


    getToken()
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("uuuuuuuuuuuu", user);
        setUser(user)

        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            // console.log("userData",userData);

            setLoading(false)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);


  return <AppMainStack />
}









