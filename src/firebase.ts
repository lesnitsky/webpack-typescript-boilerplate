import * as firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
firebase.analytics();

export const messages = db.collection('messages');
