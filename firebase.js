// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEpHt1cBhlpRNJB05EnOfVkwmmC0ozSII",
  authDomain: "taxiplanner-76959.firebaseapp.com",
  projectId: "taxiplanner-76959",
  storageBucket: "taxiplanner-76959.appspot.com",
  messagingSenderId: "955494776268",
  appId: "1:955494776268:web:7d082b508c769d66c8f169",
  measurementId: "G-L710FSF5ND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore();

const coursesRef = collection(db, "courses");

const addCourse = (course) => {
  addDoc(coursesRef, {
    ...course,
  }).then(() => {
    // reset le formulaire
    console.log("course ajouté !");
  });
};
//const clientsRef = collection(db, "clients");

export { db, coursesRef, addCourse };
