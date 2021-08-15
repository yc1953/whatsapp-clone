import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCRheax6-5wIkwOYEJ5OpXwnpsUlqJisBM",
    authDomain: "whatsapp-5d433.firebaseapp.com",
    projectId: "whatsapp-5d433",
    storageBucket: "whatsapp-5d433.appspot.com",
    messagingSenderId: "1043481874794",
    appId: "1:1043481874794:web:58e4679ece8486243c9513",
    measurementId: "G-SMFX8E0EMD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;