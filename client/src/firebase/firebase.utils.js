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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
