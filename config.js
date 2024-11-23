
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBWr0G_UonExB09HetLgbOyZizeV4yrsu4",
  authDomain: "quiz-dac80.firebaseapp.com",
  projectId: "quiz-dac80",
  storageBucket: "quiz-dac80.appspot.com",
  messagingSenderId: "328436907156",
  appId: "1:328436907156:web:36329aa3567ae57ff40881",
  measurementId: "G-Q76JWTRWHN"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); 
}

export { firebase };
