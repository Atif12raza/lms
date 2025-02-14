// Import the required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbQSCRUIUfLqlrIsdCjS4RAojlyPRYTGs",
  authDomain: "projectatifraza.firebaseapp.com",
  projectId: "projectatifraza",
  storageBucket: "projectatifraza.appspot.com", 
  messagingSenderId: "473039405184",
  appId: "1:473039405184:web:2e4b34a2bd604fabcc6665"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
