import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA8_tTF-p6MBEzGJ2BQve4SrTBn7-VDSo4",
  authDomain: "servicehatapp.firebaseapp.com",
  projectId: "servicehatapp",
  storageBucket: "servicehatapp.appspot.com",
  messagingSenderId: "213075828637",
  appId: "1:213075828637:web:d5998cfa2a691516071974"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
