import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyCX4Nwr3CStqb3NmK4BifvlIF3WQPpzJ00',
  authDomain: 'homedotcome-97b7f.firebaseapp.com',
  databaseURL: 'https://homedotcome-97b7f.firebaseio.com',
  projectId: 'homedotcome-97b7f',
  storageBucket: 'homedotcome-97b7f.appspot.com',
  messagingSenderId: '590792733218'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
