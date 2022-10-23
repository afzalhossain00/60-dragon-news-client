// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW4SGYk2TUvyV00uY7nCVuFsxlPcjOcWI",
    authDomain: "dragon-news-f7b89.firebaseapp.com",
    projectId: "dragon-news-f7b89",
    storageBucket: "dragon-news-f7b89.appspot.com",
    messagingSenderId: "776249869099",
    appId: "1:776249869099:web:3363f140bbf39403cbbb6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;