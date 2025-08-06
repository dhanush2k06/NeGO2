import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMdw4-w1uho5ogo9LIoBYRTphfsyKgGYY",
  authDomain: "nego-c77e1.firebaseapp.com",
  projectId: "nego-c77e1",
  storageBucket: "nego-c77e1.firebasestorage.app",
  messagingSenderId: "694988690178",
  appId: "1:694988690178:web:c947bdbc8d1aaef976e81b",
  measurementId: "G-JCDKYKCYN6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM references
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userDisplay = document.getElementById("userDisplayName");

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    userDisplay.textContent = `👋 Hello, ${user.displayName || user.email}`;
  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    userDisplay.textContent = "";
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out successfully");
    window.location.href = "login.html";
  });
});
