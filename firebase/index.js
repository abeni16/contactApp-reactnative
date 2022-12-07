// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCM5paoduwJ358Sxk-JWL2fyiHkGWmcUY",
  authDomain: "contact-reactnative.firebaseapp.com",
  projectId: "contact-reactnative",
  storageBucket: "contact-reactnative.appspot.com",
  messagingSenderId: "955102717503",
  appId: "1:955102717503:web:c11a9e1540996b510cba8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, doc, getFirestore, collection, addDoc, getDocs, deleteDoc };
