// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCxgFYu_M1sveXomUvsY1X-J05LQFpCYfA',
  authDomain: 'adventureplan-anhcbt.firebaseapp.com',
  projectId: 'adventureplan-anhcbt',
  storageBucket: 'adventureplan-anhcbt.appspot.com',
  messagingSenderId: '371849693387',
  appId: '1:371849693387:web:698723c6fa28b89bfcb34e',
  measurementId: 'G-ZRL7M40EQ8',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
