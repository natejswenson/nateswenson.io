import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyC5IEcJ3tufQhpUd1NnDWIoehoZgHWksVU",
    authDomain: "nateswensonio.firebaseapp.com",
    databaseURL: "https://nateswensonio.firebaseio.com",
    projectId: "nateswensonio",
    storageBucket: "nateswensonio.appspot.com",
    messagingSenderId: "908747001731"
  };
  firebase.initializeApp(config);
  export default firebase;


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
auth,
};
