import firebase from 'firebase/app';
import 'firebase/auth';

// const config = {
//   apiKey: "AIzaSyCjulOvnGTKYWrmznnU70-W2NMKJgm8rMA",
//   authDomain: "in-common-hackathon.firebaseapp.com",
//   databaseURL: "https://in-common-hackathon.firebaseio.com",
//   projectId: "in-common-hackathon",
//   storageBucket: "in-common-hackathon.appspot.com",
//   messagingSenderId: "964821891404"
// };

const config = {
  apiKey: "AIzaSyCjulOvnGTKYWrmznnU70-W2NMKJgm8rMA",
  authDomain: "in-common-hackathon.firebaseapp.com",
  databaseURL: "https://in-common-hackathon.firebaseio.com",
  projectId: "in-common-hackathon",
  storageBucket: "in-common-hackathon.appspot.com",
  messagingSenderId: "964821891404"
};

// if (!firebase.apps.length) {
firebase.initializeApp(config);
// }

const auth = firebase.auth();

export {
  auth
};
