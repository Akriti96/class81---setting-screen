import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBq9OcP8nFcWITaOjcTXS4sh6Tat27Aat0",
  authDomain: "yamunabook-santa.firebaseapp.com",
  projectId: "yamunabook-santa",
  storageBucket: "yamunabook-santa.appspot.com",
  messagingSenderId: "189235639900",
  appId: "1:189235639900:web:b8364a55e62b10c9629899"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
