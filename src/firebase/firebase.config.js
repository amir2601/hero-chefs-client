// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCza09JlxjBY1XAomi_1cdnc_njXcF4Ums",
  authDomain: "hero-chefs.firebaseapp.com",
  projectId: "hero-chefs",
  storageBucket: "hero-chefs.appspot.com",
  messagingSenderId: "390517036591",
  appId: "1:390517036591:web:7c2914b4e2562af57d58da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;