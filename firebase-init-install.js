// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgLtyDe9jUfsxhiKzOIyx3SyAS39eDJU",
  authDomain: "luthfi-tantowi.firebaseapp.com",
  databaseURL: "https://luthfi-tantowi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luthfi-tantowi",
  storageBucket: "luthfi-tantowi.appspot.com",
  messagingSenderId: "891219601658",
  appId: "1:891219601658:web:517eaf3b9a08b2ee500143",
  measurementId: "G-JSLNVCXK3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);