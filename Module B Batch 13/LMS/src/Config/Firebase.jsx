// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3_cFSNT9e2d2OlCTnyelEYIABxFmsDXk",
  authDomain: "auth-db-3dc61.firebaseapp.com",
  projectId: "auth-db-3dc61",
  storageBucket: "auth-db-3dc61.appspot.com",
  messagingSenderId: "561535562580",
  appId: "1:561535562580:web:b09841d705484296420ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);