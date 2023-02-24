import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrACmk5IvR59h8ZdnUH0ehYl8LRJq_3ms',
  authDomain: 'mini-blog---react.firebaseapp.com',
  projectId: 'mini-blog---react',
  storageBucket: 'mini-blog---react.appspot.com',
  messagingSenderId: '944264755548',
  appId: '1:944264755548:web:26b931cb022af15561e999',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
