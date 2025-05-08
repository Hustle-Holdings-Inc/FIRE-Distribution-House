import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AlzaSyDKVbaUG7NcSINJLGl_47Z2Go7WEXXwB7k",
  authDomain: "fire-distribution-home.firebaseapp.com",
  projectId: "fire-distribution-home",
  storageBucket: "fire-distribution-home.appspot.com",
  messagingSenderId: "318676262338",
  appId: "1:318676262338:web:YOUR_UNIQUE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

window.register = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered"))
    .catch(e => alert(e.message));
};

window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("upload-section").style.display = "block";
      alert("Logged in");
    })
    .catch(e => alert(e.message));
};

window.uploadMusic = function() {
  const file = document.getElementById("musicFile").files[0];
  const storageRef = ref(storage, 'tracks/' + file.name);
  uploadBytes(storageRef, file)
    .then(() => alert("Upload successful"))
    .catch(e => alert(e.message));
};