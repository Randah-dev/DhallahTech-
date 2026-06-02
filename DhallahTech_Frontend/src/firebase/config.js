import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDjUd0IQzzL6NnOrzgpSVR6m6eeTCZQgho",
  authDomain: "dhallahtech.firebaseapp.com",
  projectId: "dhallahtech",
  storageBucket: "dhallahtech.firebasestorage.app",
  messagingSenderId: "251529980765",
  appId: "1:251529980765:web:2ce09729330358272fd6b4",
  measurementId: "G-QZ2ZBV5NNG"
};

// تشغيل الفايربيس
const app = initializeApp(firebaseConfig);

// تصدير الداتابيز للفرونت إند
export const db = getFirestore(app);