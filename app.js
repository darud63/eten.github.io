// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Простая авторизация с логином через файл
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
