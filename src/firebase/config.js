import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc3INE-MtOC56nGONt9y1KdSrEQjwCbYw",
  authDomain: "vue-3-projects.firebaseapp.com",
  projectId: "vue-3-projects",
  storageBucket: "vue-3-projects.appspot.com",
  messagingSenderId: "79712493233",
  appId: "1:79712493233:web:b8d1e4d4d974a4589c0c90",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
