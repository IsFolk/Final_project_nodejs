let express = require('express')
let app = express();
let firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyAUfTR_cmYn3fcv9kbH72gvunhFUykNfGk",
    authDomain: "myproject-4deff.firebaseapp.com",
    databaseURL: "https://myproject-4deff.firebaseio.com",
    projectId: "myproject-4deff",
    storageBucket: "myproject-4deff.appspot.com",
    messagingSenderId: "743442785939",
    appId: "1:743442785939:web:134ba7062c459322fecf66",
    measurementId: "G-T3891TSH0L"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
async (req, res) => {
    let data = await db.collection('classA').get();
    console.log(data);
}