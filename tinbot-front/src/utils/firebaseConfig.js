import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBw8m8mdSYp3nJDvFJbsmzzgap1Tf_wj8Y",
  authDomain: "tinbot-a2135.firebaseapp.com",
  databaseURL:
    "https://tinbot-a2135-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tinbot-a2135",
  storageBucket: "tinbot-a2135.appspot.com",
  messagingSenderId: "235766288075",
  appId: "1:235766288075:web:3b8c9c7a63d4deb96b554e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
