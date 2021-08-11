import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyA6t18N3djD6B_0wDJHBKSk8hJrJGpS7Fg",
  authDomain: "netflix-4b9fb.firebaseapp.com",
  projectId: "netflix-4b9fb",
  storageBucket: "netflix-4b9fb.appspot.com",
  messagingSenderId: "254958133487",
  appId: "1:254958133487:web:b44ea160e25814d9dd7b1a"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
