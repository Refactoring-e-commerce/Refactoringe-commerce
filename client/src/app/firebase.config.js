// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5Lq1AtkOh8MLxfaQlC4Zg8COrYk10uFc",
  authDomain: "refactoring-8cb6c.firebaseapp.com",
  projectId: "refactoring-8cb6c",
  storageBucket: "refactoring-8cb6c.appspot.com",
  messagingSenderId: "826014323656",
  appId: "1:826014323656:web:3ef2ee6d09ff9d8401a6fd",
  measurementId: "G-LMCRZY88NY"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)