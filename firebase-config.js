// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
export const auth = getAuth(app);
