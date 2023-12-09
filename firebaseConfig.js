// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5oqIo5ed7uzcSOreKH5jUnbAehErMOa0",
  authDomain: "dhoomak-231c4.firebaseapp.com",
  projectId: "dhoomak-231c4",
  storageBucket: "dhoomak-231c4.appspot.com",
  messagingSenderId: "431613422686",
  appId: "1:431613422686:web:7cbab63cba052988cf58cf",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const database = getFirestore()
