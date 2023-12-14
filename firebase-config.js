// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRnKSOf-pocY-dcG6P2yZmke82ZPWfXA",
  authDomain: "saveyou-app.firebaseapp.com",
  projectId: "saveyou-app",
  storageBucket: "saveyou-app.appspot.com",
  messagingSenderId: "345888166974",
  appId: "1:345888166974:web:d8657b1431bd86dbbd6d6f",
  measurementId: "G-D1G29FQPTZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;

// Initialize Firebase