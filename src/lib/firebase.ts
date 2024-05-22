import { initializeApp } from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCn3w4nqeAUFpgtPx6nS2VSaKkffEPcmQc",
    authDomain: "sos-registration-e8e05.firebaseapp.com",
    projectId: "sos-registration-e8e05",
    storageBucket: "sos-registration-e8e05.appspot.com",
    messagingSenderId: "984330978698",
    appId: "1:984330978698:web:28bc82a222642e96733473",
    measurementId: "G-3HR1HMM8QL"
};

export const app = initializeApp(firebaseConfig);
