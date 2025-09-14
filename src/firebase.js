// // firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyA0jqhYtBEX3zZD8hI3F4Tvww9LvXEyTWM",
//   authDomain: "practice01-12f91.firebaseapp.com",
//   projectId: "practice01-12f91",
//   // For Firebase Storage the bucket domain must be <project-id>.appspot.com
//   storageBucket: "practice01-12f91.appspot.com",
//   messagingSenderId: "129922834239",
//   appId: "1:129922834239:web:ce2b6d8231ca371ec7bd8a",
//   measurementId: "G-6P7C1NGFGC"


  
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// // Initialize providers
// export const googleProvider = new GoogleAuthProvider();
// export const githubProvider = new GithubAuthProvider();
// export const db = getFirestore(app);


// // export { auth, provider, db };
// // export default app;
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0jqhYtBEX3zZD8hI3F4Tvww9LvXEyTWM",
  authDomain: "practice01-12f91.firebaseapp.com",
  projectId: "practice01-12f91",
  // For Firebase Storage the bucket domain must be <project-id>.appspot.com
  storageBucket: "practice01-12f91.appspot.com",
  messagingSenderId: "129922834239",
  appId: "1:129922834239:web:ce2b6d8231ca371ec7bd8a",
  measurementId: "G-6P7C1NGFGC"


  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize providers
export const googleProvider = new GoogleAuthProvider();
// export const githubProvider = new GithubAuthProvider();
export const db = getFirestore(app);