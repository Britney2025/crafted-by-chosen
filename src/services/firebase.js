// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2a2e_lec_E2wrBq7LftyKUCkWGRZtBc",
  authDomain: "crafted-by-chosen.firebaseapp.com",
  projectId: "crafted-by-chosen",
  storageBucket: "crafted-by-chosen.firebasestorage.app",
  messagingSenderId: "113590837172",
  appId: "1:113590837172:web:aaddd398416ec2d5a09ce1",
  measurementId: "G-T1SBVRZMKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);