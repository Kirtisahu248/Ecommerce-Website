// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHqEmyELfeGV3WA3QImoBA6JSMfYmOzFk",
  authDomain: "ecommercewebsite-4a4d2.firebaseapp.com",
  projectId: "ecommercewebsite-4a4d2",
  storageBucket: "ecommercewebsite-4a4d2.firebasestorage.app",
  messagingSenderId: "254175051899",
  appId: "1:254175051899:web:6e960e2ac062fe890622de",
  measurementId: "G-3MXBET7XNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();