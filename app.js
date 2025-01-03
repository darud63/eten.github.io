import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from './firebase-config.js';

// Инициализация Firestore
const db = getFirestore(app);

// Простая авторизация
const validUser = {
    username: "admin",
    password: "12345"
};

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === validUser.username && password === validUser.password) {
        window.location.href = 'main.html';
    } else {
        errorMessage.textContent = 'Invalid login or password';
    }
};

// Добавляем данные в Firestore
addDoc(collection(db, "test"), {
    message: "Hello Firebase!"
}).then(() => {
    console.log("Data successfully added!");
}).catch((error) => {
    console.error("Error adding data: ", error);
});
