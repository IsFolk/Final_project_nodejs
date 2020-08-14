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
app.set('view engine', 'ejs');//server丟ejs檔案
app.get('/', async (req, res) => {
    let collection = await db.collection('classA').get();
    let userArr = [];
    collection.docs.forEach((doc) => {
        userArr.push(doc.data().name);
    })
    res.render("default", {
        users: userArr,
        title: "This is root page!"
    })
})
app.listen(3000, () => {
    console.log("render_test server is running at http://127.0.0.1:3000")
})