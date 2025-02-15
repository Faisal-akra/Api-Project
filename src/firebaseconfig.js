// import { initializeApp } from "firebase/app";

// var firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_DATA_BASE_URL,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId:import.meta.env.VITE_MEASUREMENT_ID
// }

// export const myApp = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQVO7tw_O8flAcxMpTWHj32lYTuYSFvo",
  authDomain: "authentication-c2862.firebaseapp.com",
  projectId: "authentication-c2862",
  storageBucket: "authentication-c2862.firebasestorage.app",
  messagingSenderId: "965106012030",
  appId: "1:965106012030:web:134f86d937600264272d2f"
};

// Initialize Firebase
export const myApp = initializeApp(firebaseConfig);