import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzWWt171KFV4P7b6t7M8KAMqh95JW91t8",
  authDomain: "cafe-70d64.firebaseapp.com",
  projectId: "cafe-70d64",
  storageBucket: "cafe-70d64.appspot.com",
  messagingSenderId: "889905100897",
  appId: "1:889905100897:web:91d66d5665f536142a9220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;