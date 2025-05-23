import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjYcKIeASZXcaz1_L5Vj4-p0FegySCCjE",
  authDomain: "synapse-ai-690c5.firebaseapp.com",
  projectId: "synapse-ai-690c5",
  storageBucket: "synapse-ai-690c5.firebasestorage.app",
  messagingSenderId: "519022712962",
  appId: "1:519022712962:web:af56458a08195f2ac8bc9b",
  measurementId: "G-FF7241Y809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;