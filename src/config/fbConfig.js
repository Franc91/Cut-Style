import app from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';  
  
  const firebaseConfig = {
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
  // firebase.initializeApp(firebaseConfig);

  // firebase.firestore().settings({ timestampsInSnapshots: true})

  class firebase{
      constructor(){
        app.initializeApp(firebaseConfig);
        this.auth=app.auth();
        this.db=app.firestore() 
      }

      login(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
      }

      logout () {
        return this.auth.signOut()
      }

      async register( name, surname, email, password) {
        await this.auth.createUserWithEmailAndPassword( name, surname, email, password )
        return this.auth.currentUser.updateProfile({
          displayName: name + surname,

        })
      }
  }
  export default new.firebase()
  // export default firebase;