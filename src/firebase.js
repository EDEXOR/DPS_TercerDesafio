import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyA8ra35MCT7oz9imVHwmxXNz_Z3URCLacE",
    authDomain: "dps-sd172030.firebaseapp.com",
    databaseURL: "https://dps-sd172030.firebaseio.com",
    projectId: "dps-sd172030",
    storageBucket: "dps-sd172030.appspot.com",
    messagingSenderId: "89015153043",
    appId: "1:89015153043:web:b82b53da8750c4e6673866",
    measurementId: "G-3M4WLGHY9W"
});

export const db = app.firestore();
export const auth = app.auth();
export default app;

const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignUp = () => {
  auth.signInWithPopup(provider);
};
