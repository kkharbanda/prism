import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGvjfwJwbanrD4vRzIz8OFdwVncrOyP9k",
    authDomain: "prism-fc890.firebaseapp.com",
    projectId: "prism-fc890",
    storageBucket: "prism-fc890.appspot.com",
    messagingSenderId: "570195377139",
    appId: "1:570195377139:web:3208fc8a029f39503b7086",
    measurementId: "G-V9CGSZFNZ9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    firebaseApp,
    auth,
    db
}