import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrxEJfUYrgeNMR7d-dXksEFys3bjF3N2E",
  authDomain: "new-commerce-db.firebaseapp.com",
  projectId: "new-commerce-db",
  storageBucket: "new-commerce-db.appspot.com",
  messagingSenderId: "426544579737",
  appId: "1:426544579737:web:a7a723fd4dc0b6cee6e408",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.massage);
    }
  }

  return userDocRef;
};
