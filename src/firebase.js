import firebase from 'firebase/compat/app'
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth } from "firebase/auth" 
  
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA2GxoMxhda3gJ3UCn5tQu9qGfPxVLtT3k",
    authDomain: "newapp-978e8.firebaseapp.com",
    projectId: "newapp-978e8",
    storageBucket: "newapp-978e8.appspot.com",
    messagingSenderId: "57419840599",
    appId: "1:57419840599:web:b3eadaa6f75ea5aa797712",
    measurementId: "G-P8SBFLHNX4"
  };
  const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export default app