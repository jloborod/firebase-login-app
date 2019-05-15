import { initializeApp, auth } from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBxIh7vOW5sZHBgaLGtOz28cxnAb8w-JvY',
  authDomain: 'react-firebase-login-app.firebaseapp.com',
  databaseURL: 'https://react-firebase-login-app.firebaseio.com',
  projectId: 'react-firebase-login-app',
  storageBucket: 'react-firebase-login-app.appspot.com',
  messagingSenderId: '650823228356',
  appId: '1:650823228356:web:774805f883bf29ef',
};

const CHECK_USER_TIME = 3000;

const init = () => initializeApp(firebaseConfig);

const getAuthUser = (maxTime = CHECK_USER_TIME) =>
  new Promise(resolve => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      const timeout = setTimeout(() => {
        unsubscribe();
        resolve(null);
      }, maxTime);
      if (user && user.email) {
        const userEmail = user.email;
        unsubscribe();
        clearTimeout(timeout);
        resolve(userEmail);
      }
    });
  });

const onAuthStateChanged = (fn) => auth().onAuthStateChanged(fn);

const isSignInWithEmailLink = url =>
  auth().isSignInWithEmailLink(url);

const sendSignInLinkToEmail = email =>
  auth().sendSignInLinkToEmail(email, {
    url: `${window.location.origin}/signin/`,
    handleCodeInApp: true,
  });

const signInWithEmailLink = (email, link) => auth().signInWithEmailLink(email, link);

const signOut = () => auth().signOut();

init(); // This forces firebase to initialise :)

export default {
  getAuthUser,
  onAuthStateChanged,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
};
