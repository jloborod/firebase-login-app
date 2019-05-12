import React from 'react';
import { initializeApp, auth } from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxIh7vOW5sZHBgaLGtOz28cxnAb8w-JvY",
  authDomain: "react-firebase-login-app.firebaseapp.com",
  databaseURL: "https://react-firebase-login-app.firebaseio.com",
  projectId: "react-firebase-login-app",
  storageBucket: "react-firebase-login-app.appspot.com",
  messagingSenderId: "650823228356",
  appId: "1:650823228356:web:774805f883bf29ef"
};

initializeApp(firebaseConfig);

export const initialProps = {
  isSignedIn: () => auth().isSignInWithEmailLink(window.location.href),
  sendEmail: email =>
    auth().sendSignInLinkToEmail(email, {
      url: `https://localhost:3000/signin/${email}`,
      handleCodeInApp: true,
    }),
  signIn: (email, link) => auth().signInWithEmailLink(email, link),
  signOut: () => auth().signOut(),
};

export const AuthContext = React.createContext(initialProps);

export default AuthContext;
