// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwrvLSGktNJuvxmOJ883RyKBxl7L4gwc0",
  authDomain: "personal-web-47c4e.firebaseapp.com",
  projectId: "personal-web-47c4e",
  storageBucket: "personal-web-47c4e.appspot.com",
  messagingSenderId: "356881092409",
  appId: "1:356881092409:web:fb5fd6685f40cb991ce2e8",
  measurementId: "G-CY12TYZE0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };