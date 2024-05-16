// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyC9Bzy1VDCV7fDPQ5JFL3kjgK1WkeoHzT8",
    authDomain: "anonymous-fb8b0.firebaseapp.com",
    projectId: "anonymous-fb8b0",
    storageBucket: "anonymous-fb8b0.appspot.com",
    messagingSenderId: "551735008065",
    appId: "1:551735008065:web:3094528e24d1cc04719fc0",
    measurementId: "G-Z27L0HDEFS"
  };
  


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}