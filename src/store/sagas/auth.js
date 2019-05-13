import { eventChannel, END } from 'redux-saga';
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { initializeApp, auth } from 'firebase';

import { init, setUser } from '../actions/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBxIh7vOW5sZHBgaLGtOz28cxnAb8w-JvY',
  authDomain: 'react-firebase-login-app.firebaseapp.com',
  databaseURL: 'https://react-firebase-login-app.firebaseio.com',
  projectId: 'react-firebase-login-app',
  storageBucket: 'react-firebase-login-app.appspot.com',
  messagingSenderId: '650823228356',
  appId: '1:650823228356:web:774805f883bf29ef',
};

export function* initAuth() {
  yield call(initializeApp, firebaseConfig);
  yield put(init());
}

function authStateChannel() {
  return eventChannel(emitter => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        emitter(user);
      }
    });

    return () => unsubscribe();
  });
}

export function* authStateWatch() {
  const channel = yield call(authStateChannel);
  while (true) {
    const user = yield take(channel);
    console.log(user);
    yield put(user)
  }
}
