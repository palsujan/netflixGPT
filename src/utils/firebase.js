// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr9Q7x78QUMg2rVKX9RfJJm6cOB9HQSUQ",
  authDomain: "netflixgpt-5075c.firebaseapp.com",
  projectId: "netflixgpt-5075c",
  storageBucket: "netflixgpt-5075c.appspot.com",
  messagingSenderId: "1075554293134",
  appId: "1:1075554293134:web:053620fba8c4f8c39540df",
  measurementId: "G-FGTMESFRG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


