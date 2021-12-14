import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCXrPtEOBZrlkcFfyTdWrsgP6mOpuBYD2w',
	authDomain: 'devbranch-e7972.firebaseapp.com',
	projectId: 'devbranch-e7972',
	storageBucket: 'devbranch-e7972.appspot.com',
	messagingSenderId: '998539719469',
	appId: '1:998539719469:web:2eea2ae11d36db854959a4',
	measurementId: 'G-900LXFFTR0',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;
