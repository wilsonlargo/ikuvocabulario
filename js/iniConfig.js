import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    doc,
    addDoc,
    setDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    deleteField,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8MHQrLVF7vwjzoJzHZo2tYIt8raEvG2c",
    authDomain: "ikuvocabulario.firebaseapp.com",
    projectId: "ikuvocabulario",
    storageBucket: "ikuvocabulario.appspot.com",
    messagingSenderId: "808132231650",
    appId: "1:808132231650:web:970d987ced68e67f91b9bb"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
