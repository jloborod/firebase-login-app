import { call, put, delay } from 'redux-saga/effects';
import { initializeApp } from 'firebase';

import { authInit } from '../actions/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxIh7vOW5sZHBgaLGtOz28cxnAb8w-JvY",
  authDomain: "react-firebase-login-app.firebaseapp.com",
  databaseURL: "https://react-firebase-login-app.firebaseio.com",
  projectId: "react-firebase-login-app",
  storageBucket: "react-firebase-login-app.appspot.com",
  messagingSenderId: "650823228356",
  appId: "1:650823228356:web:774805f883bf29ef"
};

export function* initAuth() {
  yield call(initializeApp, firebaseConfig);
  yield put(authInit());
}
