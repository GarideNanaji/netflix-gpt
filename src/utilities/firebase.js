// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNnrwrT5fbsvlzsHzRjUH-vXe_ck7698g",
  authDomain: "netflixgpt-6f839.firebaseapp.com",
  projectId: "netflixgpt-6f839",
  storageBucket: "netflixgpt-6f839.firebasestorage.app",
  messagingSenderId: "883809793966",
  appId: "1:883809793966:web:f04e0e66f730a55c0cba3f",
  measurementId: "G-RXRG2311DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();