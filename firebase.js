import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqHq3k1EkL5KxxpBkFEm9OxgCtixshJY",
  authDomain: "xenogram-4a1c0.firebaseapp.com",
  projectId: "xenogram-4a1c0",
  storageBucket: "xenogram-4a1c0.appspot.com",
  messagingSenderId: "219275152669",
  appId: "1:219275152669:web:ee7d63910d3a8e4ff065f4",
  measurementId: "G-2BZ2X9HSF9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
