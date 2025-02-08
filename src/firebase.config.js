// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeh3iY_d9QDSEQcKKH2EqRelEFTPnZwhA",
  authDomain: "tabase-practice.firebaseapp.com",
  projectId: "tabase-practice",
  storageBucket: "tabase-practice.firebasestorage.app",
  messagingSenderId: "156249581176",
  appId: "1:156249581176:web:587a97ad6334d99e076f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app