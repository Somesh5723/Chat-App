// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCD4PlbslIDeVuDg0wtYUTgc5pJdzlNbeM",
  authDomain: "chat-58736.firebaseapp.com",
  projectId: "chat-58736",
  storageBucket: "chat-58736.appspot.com",
  messagingSenderId: "535539005503",
  appId: "1:535539005503:web:11e6ff761f0ad7357fe08a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()