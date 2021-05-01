import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
firebase.initializeApp({
  apiKey: "AIzaSyD29oeUGdFvIf2DFc3LKAWoBiFUcXcbRBM",
  authDomain: "schoolender-deabc.firebaseapp.com",
  projectId: "schoolender-deabc",
  storageBucket: "schoolender-deabc.appspot.com",
  messagingSenderId: "627188925820",
  appId: "1:627188925820:web:4206ca5adae0952a5a50f9",
  measurementId: "G-Z217JMM6KD",
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
