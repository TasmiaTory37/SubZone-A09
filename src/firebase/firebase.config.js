// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo4rrPk2zXivmqQ1TqWvXkyioba1xswU8",
  authDomain: "subzone-a9.firebaseapp.com",
  projectId: "subzone-a9",
  storageBucket: "subzone-a9.firebasestorage.app",
  messagingSenderId: "885779268042",
  appId: "1:885779268042:web:d32d7ae03b13a136fb4f33",
  measurementId: "G-EFZ02HPWXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;