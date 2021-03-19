import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArgq2KWpz-xCuZeHGCkG-1KA5uQ2wTax4",
  authDomain: "clone-react-29fa9.firebaseapp.com",
  projectId: "clone-react-29fa9",
  storageBucket: "clone-react-29fa9.appspot.com",
  messagingSenderId: "513292794853",
  appId: "1:513292794853:web:37870ff111e8639064cd0c",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
