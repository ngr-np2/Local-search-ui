import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfFkertfRStmpYM0keX2E7QM7R6FcEFlA",
  authDomain: "localsearch-itahari.firebaseapp.com",
  projectId: "localsearch-itahari",
  storageBucket: "localsearch-itahari.appspot.com",
  messagingSenderId: "233499383837",
  appId: "1:233499383837:web:c9012ba1dd58a8f3080ef4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
