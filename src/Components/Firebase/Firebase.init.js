// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7N0u68pjQGPmgTfnK5n02STZ6z6wTpf0",
  authDomain: "fm-react-project.firebaseapp.com",
  projectId: "fm-react-project",
  storageBucket: "fm-react-project.firebasestorage.app",
  messagingSenderId: "177155063014",
  appId: "1:177155063014:web:859837b5447581cfaa4f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app);