// Firebase конфигурация
const firebaseConfig = {
  apiKey: "AIzaSyAERuRbz1wE_b34wZgmb_nbNMGF4RpPaF4",
  authDomain: "eten-373bf.firebaseapp.com",
  databaseURL: "https://eten-373bf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eten-373bf",
  storageBucket: "eten-373bf.firebasestorage.app",
  messagingSenderId: "21158034114",
  appId: "1:21158034114:web:0cc51995fcef064f19595b",
  measurementId: "G-5MMWNKP6PB"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
