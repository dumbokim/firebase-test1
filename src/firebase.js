// firebase 연결하기!
import firebase from "firebase";

// 1. initialize

const firebaseConfig = {
  apiKey: "AIzaSyAvYI2wMK5MeQ1l9lKVg2SQQhiJt1kdvy8",
  authDomain: "test1-27eed.firebaseapp.com",
  projectId: "test1-27eed",
  storageBucket: "test1-27eed.appspot.com",
  messagingSenderId: "521968246277",
  appId: "1:521968246277:web:1356e4b2729813af07866c",
  measurementId: "G-N6FYDTD81Q"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// const ds = firebaseApp.storage();

export default db;