import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCg_1O75Sxgmiw2BsvBnM4S0v1KWiCzOqo",
    authDomain: "clothes-shop-199e0.firebaseapp.com",
    databaseURL: "https://clothes-shop-199e0.firebaseio.com",
    projectId: "clothes-shop-199e0",
    storageBucket: "clothes-shop-199e0.appspot.com",
    messagingSenderId: "171590356336",
    appId: "1:171590356336:web:192563e3ea885a40dfd3b5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;