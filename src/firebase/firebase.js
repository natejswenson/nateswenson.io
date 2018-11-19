import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
const config = {
//'Hahaha'
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
