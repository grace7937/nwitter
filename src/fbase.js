// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDuY7n23529mZqBsiz4yyN-Sk_FljTOycE',
//   authDomain: 'nwitter-dc699.firebaseapp.com',
//   projectId: 'nwitter-dc699',
//   storageBucket: 'nwitter-dc699.appspot.com',
//   messagingSenderId: '29756364600',
//   appId: '1:29756364600:web:3b3aa38727914b711553cd',
// };

// firebase.initializeApp(firebaseconfig);

// export default authService = firebase.auth();

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDuY7n23529mZqBsiz4yyN-Sk_FljTOycE',
      authDomain: 'nwitter-dc699.firebaseapp.com',
      projectId: 'nwitter-dc699',
      storageBucket: 'nwitter-dc699.appspot.com',
      messagingSenderId: '29756364600',
      appId: '1:29756364600:web:3b3aa38727914b711553cd',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
