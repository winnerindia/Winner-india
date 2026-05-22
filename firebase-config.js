<!-- firebase/firebase-config.js -->

// Firebase CDN Version

const firebaseConfig = {
  apiKey: "AIzaSyA0QBBOmEy8TqPjUlZOL4MM77nCvI-PTXI",
  authDomain: "winner-india-f871e.firebaseapp.com",
  projectId: "winner-india-f871e",
  storageBucket: "winner-india-f871e.firebasestorage.app",
  messagingSenderId: "945426823248",
  appId: "1:945426823248:web:c2a1d8710a9e99abc83955",
  measurementId: "G-WW2YCMBL2G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
