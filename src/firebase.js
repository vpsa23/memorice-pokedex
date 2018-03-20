import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAB1AK6IRQ32kzzX7QumRdCaWgNBoX9BOw",
    authDomain: "memorice-pokemon.firebaseapp.com",
    databaseURL: "https://memorice-pokemon.firebaseio.com",
    projectId: "memorice-pokemon",
    storageBucket: "memorice-pokemon.appspot.com",
    messagingSenderId: "132801956745"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;