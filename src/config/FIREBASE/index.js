import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDPXTE5ntA_gXi7g1ZfTI4gKsVPQnz3id8",
    authDomain: "modul-9-25ae8.firebaseapp.com",
    projectId: "modul-9-25ae8",
    storageBucket: "modul-9-25ae8.appspot.com",
    messagingSenderId: "839836250822",
    appId: "1:839836250822:web:cfd02f93159c7b84bbddc7"
});

const FIREBASE = firebase;

export default FIREBASE;