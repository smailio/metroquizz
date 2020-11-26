import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyAWZT1NarIiQhSZKTESLNmg8dqkEZcDYhk",
  authDomain: "metroquizz.firebaseapp.com",
  databaseURL: "https://metroquizz.firebaseio.com",
  projectId: "metroquizz",
  storageBucket: "metroquizz.appspot.com",
  messagingSenderId: "599668118503",
  appId: "1:599668118503:web:9fd44ff46e795a3986e342",
  measurementId: "G-1LHV4LYX5P"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
