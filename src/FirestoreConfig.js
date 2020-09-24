import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

firebase.initializeApp({
  apiKey: "AIzaSyD84Jv-_GFwIvQKCX7MMmWE8-6bM2S7YJE",
  authDomain: "proyectotiendavirtual-3bd5d.firebaseapp.com",
  databaseURL: "https://proyectotiendavirtual-3bd5d.firebaseio.com",
  projectId: "proyectotiendavirtual-3bd5d",
  storageBucket: "proyectotiendavirtual-3bd5d.appspot.com",
  messagingSenderId: "175807946049",
  appId: "1:175807946049:web:b94fa7c33c4e1f298695c0"
})

const fireDB = firebase.firestore();

export default fireDB;