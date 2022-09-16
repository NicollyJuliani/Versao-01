// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ewj3eK6J4MXbC6qFdmEAiNAtu09UDjU",
  authDomain: "aula1-13b2a.firebaseapp.com",
  databaseURL: "https://aula1-13b2a-default-rtdb.firebaseio.com",
  projectId: "aula1-13b2a",
  storageBucket: "aula1-13b2a.appspot.com",
  messagingSenderId: "769456334482",
  appId: "1:769456334482:web:1117fec6bf85536b25e84b",
  measurementId: "G-GFVVXJCW4M"
};
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;