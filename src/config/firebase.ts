import 'firebase/auth';
import 'firebase/functions';
import 'firebase/storage';
import firebase from 'firebase/app';
import { FirebaseEmulator } from './firebaseEmulator';

const {
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_USE_FIREBASE_EMULATOR = '',
  FIREBASE_FUNCTIONS_REGION
} = process.env;

const config = {
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.app().storage();

if (REACT_APP_USE_FIREBASE_EMULATOR === 'true') {
  const emulator = new FirebaseEmulator(firebase);
  emulator.useAuth().useFunctions();
  storage.useEmulator('localhost', 5003);
}

const auth = firebase.auth();
const functions = FIREBASE_FUNCTIONS_REGION
  ? firebase.app().functions(FIREBASE_FUNCTIONS_REGION)
  : firebase.functions();

export { auth, functions, firebase, storage };
