import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQtNji304g0n1KW5S61BFJrClMnJvYsg",
  authDomain: "financial-aid-planner.firebaseapp.com",
  projectId: "financial-aid-planner",
  storageBucket: "financial-aid-planner.appspot.com",
  messagingSenderId: "707383309221",
  appId: "1:707383309221:web:194d886b3c8922750eee4c",
  measurementId: "G-1V3Y6CQ99Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(<App />,document.getElementById('root'));
>>>>>>> origin
