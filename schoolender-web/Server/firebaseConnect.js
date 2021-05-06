const firebase = require("firebase");
const app = firebase.initializeApp({
  apiKey: "AIzaSyD29oeUGdFvIf2DFc3LKAWoBiFUcXcbRBM",
  authDomain: "schoolender-deabc.firebaseapp.com",
  databaseURL:
    "https://schoolender-deabc-default-rtdb.europe-west1.firebasedatabase.app/",
});

module.exports = app;
