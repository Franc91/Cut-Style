import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';  
  
  var firebaseConfig = {
    apiKey: "AIzaSyDleF7RKXV6Lo0VNgrKoEY3t-33oLo9qrs",
    authDomain: "haircutbase-ecd78.firebaseapp.com",
    databaseURL: "https://haircutbase-ecd78.firebaseio.com",
    projectId: "haircutbase-ecd78",
    storageBucket: "haircutbase-ecd78.appspot.com",
    messagingSenderId: "420238862361",
    appId: "1:420238862361:web:456d08faa0a08124dbe288",
    measurementId: "G-X9HQ7RPS7C"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;