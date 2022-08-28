import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  odc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import{
  getAuth
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDgR7GBScYewa519_kmLvlLiiyZBRcvkAc",
  authDomain: "challenge-3d7fb.firebaseapp.com",
  projectId: "challenge-3d7fb",
  storageBucket: "challenge-3d7fb.appspot.com",
  messagingSenderId: "1022282548633",
  appId: "1:1022282548633:web:cb1a8aa20b59a6914dff08"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export {db,auth}