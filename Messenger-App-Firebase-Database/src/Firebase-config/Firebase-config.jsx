// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcPr67GYOUxyJgHCcaUCkpIs5rmybAZ0A",
    authDomain: "messenger-app-21-3.firebaseapp.com",
    databaseURL: "https://messenger-app-21-3-default-rtdb.firebaseio.com",
    projectId: "messenger-app-21-3",
    storageBucket: "messenger-app-21-3.appspot.com",
    messagingSenderId: "674748412115",
    appId: "1:674748412115:web:b875c6e23c741b2794a426"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);

export { firebase_app, auth, database };