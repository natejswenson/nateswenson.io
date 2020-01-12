import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: "AIzaSyC5IEcJ3tufQhpUd1NnDWIoehoZgHWksVU",
  authDomain: "nateswensonio.firebaseapp.com",
  databaseURL: "https://nateswensonio.firebaseio.com",
  projectId: "nateswensonio",
  storageBucket: "nateswensonio.appspot.com",
  messagingSenderId: "908747001731",
  appId: "1:908747001731:web:d31dc28970c3a3a839b0b6"


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
