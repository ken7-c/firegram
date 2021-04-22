import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBFHGIGMzsv6lj9sCpShFRuIhJt82-EC4",
    authDomain: "kengram-ad325.firebaseapp.com",
    databaseURL: "https://kengram-ad325.firebaseio.com",
    projectId: "kengram-ad325",
    storageBucket: "kengram-ad325.appspot.com",
    messagingSenderId: "887404633591",
    appId: "1:887404633591:web:5f50d0f5ee2afdccc6a2f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};