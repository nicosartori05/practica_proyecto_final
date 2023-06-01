import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAl5gyZFJjjtUe8Bp-DMT3d94fEaOVVIVs",
  authDomain: "doble-5-test.firebaseapp.com",
  projectId: "doble-5-test",
  storageBucket: "doble-5-test.appspot.com",
  messagingSenderId: "581763837770",
  appId: "1:581763837770:web:af5606b0c26f6a62681bb3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {app, db, auth};

