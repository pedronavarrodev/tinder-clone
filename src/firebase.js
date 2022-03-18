import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3p7pocCVZTBTbsdhpZ2Gz5AGUXLj-ypc",
    authDomain: "tinder-clone-50abd.firebaseapp.com",
    projectId: "tinder-clone-50abd",
    storageBucket: "tinder-clone-50abd.appspot.com",
    messagingSenderId: "750872040404",
    appId: "1:750872040404:web:cbf4d8d6256dceba36bc41",
    measurementId: "G-K311CEQFTG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;