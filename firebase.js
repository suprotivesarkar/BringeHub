// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvfu4BHiLCPqC6kxpIByCa-p_0XnzAh9A",
  authDomain: "bringehub.firebaseapp.com",
  projectId: "bringehub",
  storageBucket: "bringehub.appspot.com",
  messagingSenderId: "846625606584",
  appId: "1:846625606584:web:e189de79bf55edee821d4d",
  measurementId: "G-8ML8472ZRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);