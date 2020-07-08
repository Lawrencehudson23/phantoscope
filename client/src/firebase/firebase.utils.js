import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBepttqqRX552fRCvPEFhdGOxz1pt5YPes",
  authDomain: "phantoscopehomestop.firebaseapp.com",
  databaseURL: "https://phantoscopehomestop.firebaseio.com",
  projectId: "phantoscopehomestop",
  storageBucket: "phantoscopehomestop.appspot.com",
  messagingSenderId: "296698074907",
  appId: "1:296698074907:web:f87dc6ebdc30ed816a25be",
  measurementId: "G-765BGQK59N",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
