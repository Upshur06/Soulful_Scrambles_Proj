// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgntUBmQeFe3nEVBq0hhPrxPSGxWWNl_I",
    authDomain: "soulful-scrambles-cafe.firebaseapp.com",
    projectId: "soulful-scrambles-cafe",
    storageBucket: "soulful-scrambles-cafe.appspot.com",
    messagingSenderId: "309275961244",
    appId: "1:309275961244:web:aa09cfde80ca64a3b3ca59",
    measurementId: "G-7M20MBNMN9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };