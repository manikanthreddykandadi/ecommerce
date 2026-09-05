// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0LTarD_Ao8pDj-HL9rqCorVM_sNTWQTE",
  authDomain: "ecommerce-11f69.firebaseapp.com",
  projectId: "ecommerce-11f69",
  storageBucket: "ecommerce-11f69.firebasestorage.app",
  messagingSenderId: "1058108841223",
  appId: "1:1058108841223:web:774e2cbcf089ac4d0879a2",
  measurementId: "G-V8EZ5EG4D9"
};
            
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);