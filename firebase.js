import { getApp, getApps, initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig  = {
    apiKey: "AIzaSyAz9L6YlcSBfWzgO1sTNm06bAx2iThGUkI",
    authDomain: "disney-clone-yts.firebaseapp.com",
    projectId: "disney-clone-yts",
    storageBucket: "disney-clone-yts.appspot.com",
    messagingSenderId: "843858050087",
    appId: "1:843858050087:web:d52607589948091fd86202",
    measurementId: "G-81Y0WKM186"
  };

  
const app =  !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage,firebaseConfig};