// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webdevwisdom-8c8df.firebaseapp.com",
  projectId: "webdevwisdom-8c8df",
  storageBucket: "webdevwisdom-8c8df.appspot.com",
  messagingSenderId: "11468996942",
  appId: "1:11468996942:web:a3a9a3d5e93f42f65e5e1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);