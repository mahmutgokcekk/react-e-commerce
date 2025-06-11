import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjz2_cj6ceTE36m3RgXPRrxdsAe0e0Dl0",
  authDomain: "e-commerce-app-e483b.firebaseapp.com",
  projectId: "e-commerce-app-e483b",
  storageBucket: "e-commerce-app-e483b.firebasestorage.app",
  messagingSenderId: "1069012144642",
  appId: "1:1069012144642:web:8560d7d8e2218fcdc2cd1b",
  measurementId: "G-Z60YENZBRL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);