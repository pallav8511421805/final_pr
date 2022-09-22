// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKFRtRep5RJvHzj-rbJREyyuloR7N7xmI",
  authDomain: "finalproject-3febc.firebaseapp.com",
  projectId: "finalproject-3febc",
  storageBucket: "finalproject-3febc.appspot.com",
  messagingSenderId: "627941471871",
  appId: "1:627941471871:web:aa3880529f008935beb14a",
  measurementId: "G-Q258KSXC1X",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
const db = firebaseApp.firestore();
export { db };
export const storage = getStorage(firebaseApp);
