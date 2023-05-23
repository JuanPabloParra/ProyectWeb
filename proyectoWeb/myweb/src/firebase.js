// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlwuUPSearsHX8UHmWaZAhc4XVSm8TrJo",
  authDomain: "fir-9ad8b.firebaseapp.com",
  projectId: "fir-9ad8b",
  storageBucket: "fir-9ad8b.appspot.com",
  messagingSenderId: "217737769376",
  appId: "1:217737769376:web:c55114c101700d5def74c5",
  measurementId: "G-9YG811RK0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);