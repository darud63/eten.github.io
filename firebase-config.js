// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAERuRbz1wE_b34wZgmb_nbNMGF4RpPaF4",
  authDomain: "eten-373bf.firebaseapp.com",
  databaseURL: "https://eten-373bf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eten-373bf",
  storageBucket: "eten-373bf.firebasestorage.app",
  messagingSenderId: "21158034114",
  appId: "1:21158034114:web:0cc51995fcef064f19595b",
  measurementId: "G-5MMWNKP6PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
