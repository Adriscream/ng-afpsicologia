import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCvIW1kcQodY8c46iQJpyptZZABRW_-1BI',
  authDomain: 'ng-afpsicologia.firebaseapp.com',
  projectId: 'ng-afpsicologia',
  storageBucket: 'ng-afpsicologia.appspot.com',
  messagingSenderId: '1090736482366',
  appId: '1:1090736482366:web:cebe4cf49404714adb496f',
  measurementId: 'G-SEMVPZCM0Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
