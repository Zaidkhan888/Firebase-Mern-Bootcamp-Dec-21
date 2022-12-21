// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1m_b5qMu89thoMGONXHxdmy2-w5mGABE",
  authDomain: "todo-list-efefd.firebaseapp.com",
  projectId: "todo-list-efefd",
  storageBucket: "todo-list-efefd.appspot.com",
  messagingSenderId: "293026681639",
  appId: "1:293026681639:web:e506b56768521f00ae8f02",
  measurementId: "G-8BQJTPV6Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  //passing the configurATION TO THE INITIALILZATION
const analytics = getAnalytics(app);

export const db = getFirestore(app);
