import productos from "./product.json" assert { type: "json" }

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDmPlmpVSdIPUf2diWO3pws5WIcXWQUIco",
  authDomain: "cybercart-haven.firebaseapp.com",
  projectId: "cybercart-haven",
  storageBucket: "cybercart-haven.appspot.com",
  messagingSenderId: "697832799470",
  appId: "1:697832799470:web:643013022d67132db8c7ff"

};


// Initialize Firebase

const app = initializeApp ( firebaseConfig );
const db = getFirestore ( app );

const productosRef = collection( db, 'productos')

productos.forEach( item => addDoc ( productosRef , item ))