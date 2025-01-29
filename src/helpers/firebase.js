// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth';
import {collection, getFirestore, setDoc} from 'firebase/firestore'
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyB0da6Q0ehkip2AgPan88xqHutfTEXcgfk",
 authDomain: "selfieventos-4862b.firebaseapp.com",
 projectId: "selfieventos-4862b",
 storageBucket: "selfieventos-4862b.firebasestorage.app",
 messagingSenderId: "672481557401",
 appId: "1:672481557401:web:0de21d118142273d287108",
 measurementId: "G-1NS9C1X5YG"
};

export const getEventData = async (eventId) => {
  const docRef = doc(db, "events", eventId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const updateEventData = async (eventId, data) => {
  try {
    await setDoc(doc(collection(db, "events"), eventId), data);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
