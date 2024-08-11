// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBou-JHfDHyBQwgqy_Q4PMyJroZ6HLxs9A",
  authDomain: "framesoftware-fc1a2.firebaseapp.com",
  databaseURL: "https://framesoftware-fc1a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "framesoftware-fc1a2",
  storageBucket: "framesoftware-fc1a2.appspot.com",
  messagingSenderId: "290009632449",
  appId: "1:290009632449:web:fd945d5ec6a08b4b3e0e40",
  measurementId: "G-N0K5M369RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("acc..")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });


})