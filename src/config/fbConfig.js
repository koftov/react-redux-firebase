import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyCBBBT1r-k8n5qn1vhbDS1BM1w8ZoSXUCg',
  authDomain: 'koftovsplan.firebaseapp.com',
  databaseURL: 'https://koftovsplan.firebaseio.com',
  projectId: 'koftovsplan',
  storageBucket: 'koftovsplan.appspot.com',
  messagingSenderId: '118804225945',
  appId: '1:118804225945:web:e20da470fbe0761a64fd08',
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
