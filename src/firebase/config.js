import firebase from 'react-native-firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAZ_guvKyTZuDVe5WNaGeTG5PN6IVv6vMM",
    authDomain: "fir-dbc24.firebaseapp.com",
    databaseURL: "https://fir-dbc24.firebaseio.com",
    projectId: "fir-dbc24",
    storageBucket: "fir-dbc24.appspot.com",
    messagingSenderId: "818434695053",
    appId: "1:818434695053:web:3ebbb64b06a22fe1e467c4",
    measurementId: "G-JEZT1V1100"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
