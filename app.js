const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://eten-373bf-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Инициализация Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);  // Инициализация базы данных
const auth = firebase.auth(app);  // Инициализация аутентификации

const nicknameInput = document.getElementById("nickname");
const messageInput = document.getElementById("message");
const sendMessageButton = document.getElementById("send-message");
const chatBox = document.getElementById("chat-box");

async function getIpAddress() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
}

async function sendMessage() {
    const nickname = nicknameInput.value;
    const message = messageInput.value;
    const ip = await getIpAddress();

    if (!nickname || !message) return;

    const userRef = firebase.database().ref("users/" + ip);
    const snapshot = await userRef.once("value");
    if (!snapshot.exists()) {
        await userRef.set({ nickname });
    }

    const newMessageRef = firebase.database().ref("messages").push();
    await newMessageRef.set({
        nickname,
        message,
        timestamp: Date.now(),
        ip
    });

    messageInput.value = "";  // Очищаем поле ввода
}

firebase.database().ref("messages").orderByChild("timestamp").on("child_added", (snapshot) => {
    const data = snapshot.val();
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${data.nickname}: ${data.message}`;
    chatBox.appendChild(messageDiv);
});

sendMessageButton.addEventListener("click", sendMessage);
