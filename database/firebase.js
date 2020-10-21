import * as firebase from 'firebase';
//import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const firebaseConfig = {
  apiKey: 'AIzaSyD1qXPAi_5iReykbMpQWUe3PVkmHAlWEBI',
  authDomain: 'watermonitor-4e2ef.firebaseapp.com',
  databaseURL: 'https://watermonitor-4e2ef.firebaseio.com',
  projectId: 'watermonitor-4e2ef',
  storageBucket: 'watermonitor-4e2ef.appspot.com',
  messagingSenderId: '284650474064',
  appId: '1:284650474064:web:95f0f318e0a4e9e4db1f55',
  measurementId: 'G-P0TB6E0KMD',
};

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings(settings);

export default firebase;
