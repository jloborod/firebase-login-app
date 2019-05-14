import { eventChannel, END } from 'redux-saga';
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { initializeApp, auth } from 'firebase';

import {
  init,
  AUTH_INIT,
  setUser,
  sendEmailLinkSuccess,
  sendEmailLinkError,
  AUTH_SEND_EMAIL_LINK,
  confirmEmail,
  signInSuccess,
  signInError,
  AUTH_SIGN_IN,
} from '../actions/auth';

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

export function* confirmCheck() {
  try {
    const isConfirmEmail = yield call(
      auth().isSignInWithEmailLink,
      window.location.href,
    );
    if (isConfirmEmail) {
      yield put(confirmEmail()); // Maybe another action
    }
  } catch(e) {
    console.log(e);
  }

}

export function* initAuthWatch() {
  yield takeLatest(AUTH_INIT, confirmCheck);
}

export function* sendEmailLink(action) {
  const { email } = action;
  const options = {
    url: `https://localhost:3000/signin/${email}`,
    handleCodeInApp: true,
  };
  // Workaround not to pass multiple params to call
  const sendLink = (em) => auth().sendSignInLinkToEmail(em, options);
  try {
    yield call(sendLink, email);
    yield put(sendEmailLinkSuccess());
  } catch (e) {
    console.log(e);
    yield put(sendEmailLinkError());
  }
}

export function* sendEmailLinkWatch() {
  yield takeLatest(AUTH_SEND_EMAIL_LINK, sendEmailLink);
}

export function* signIn(action) {
  const { email, link } = action;
  console.log(link);

  try {
    // Another workarour to pass single param each time
    const signInWithEmail = em => {
      return auth().signInWithEmailLink(em, link);
    }
    const resp = yield call(signInWithEmail, email);
    console.log(resp);
    yield put(signInSuccess());
  } catch (e) {
    console.log(e);
    yield put(signInError());
  }

}

export function* signInWatch() {
  yield takeLatest(AUTH_SIGN_IN, signIn);
}

function authStateChannel() {
  return eventChannel(emitter => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user && user.email) {
        emitter({ user: user.email });
      }
    });

    return () => unsubscribe();
  });
}

export function* userStateWatch() {
  const channel = yield call(authStateChannel);
  while (true) {
    const user = yield take(channel);
    yield put(setUser(user));
  }
}
