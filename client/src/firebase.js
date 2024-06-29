// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-blog-9c6e3.firebaseapp.com",
//   projectId: "mern-blog-9c6e3",
//   storageBucket: "mern-blog-9c6e3.appspot.com",
//   messagingSenderId: "306729214931",
//   appId: "1:306729214931:web:17565ce1b59759b1b48526"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9c6e3.firebaseapp.com",
  projectId: "mern-blog-9c6e3",
  storageBucket: "mern-blog-9c6e3.appspot.com",
  messagingSenderId: "306729214931",
  appId: "1:306729214931:web:17565ce1b59759b1b48526"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
