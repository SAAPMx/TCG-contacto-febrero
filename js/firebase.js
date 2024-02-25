// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  // Paste your firebase config here
  apiKey: "AIzaSyANFhqh71TQqLm2DWuQhBOAGnFMntWUqTY",
  authDomain: "tcg-contacto.firebaseapp.com",
  projectId: "tcg-contacto",
  storageBucket: "tcg-contacto.appspot.com",
  messagingSenderId: "310182934941",
  appId: "1:310182934941:web:c94bde003b9c34612c1774",
  measurementId: "G-97KL1B2HV4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);

