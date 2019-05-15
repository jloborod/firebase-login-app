import { eventChannel } from 'redux-saga';
import { call, put, take, takeLatest, race } from 'redux-saga/effects';

import actions from '../actions/auth';
import history from '../../utils/history';
import authService from '../../services/auth';

const {
  init,
  setUser,
  noUserFound,
  getUser,
  getUserSuccess,
  getUserError,
  sendEmailLinkSuccess,
  sendEmailLinkError,
  checkEmailLink,
  checkEmailLinkSuccess,
  checkEmailLinkError,
  signIn,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
} = actions;

export function* emailLinkCheckSaga() {
  try {
    // yield put(checkEmailLink());
    const isEmailLink = yield call(
      authService.isSignInWithEmailLink,
      window.location.href,
    );
    if (isEmailLink) {
      const email = localStorage.getItem('email');
      const link = history.location.search;

      if (email && link) {
        yield put(checkEmailLinkSuccess());
        yield put(signIn(email, link));
      } else {
        // We have to go to another view
        // to confirm user email for
        // security reasons
        yield call(history, '/confirm');
      }
    } else {
      yield put(checkEmailLinkError());
      yield call(history.push, '/signin');
    }
  } catch(e) {
    console.log(e);
    // Handle this generic error
    // Perhaps it should re-try
    // TODO
  }
}

export function* sendEmailLinkSaga(action) {
  const { email } = action;

  try {
    yield call(authService.sendSignInLinkToEmail, email);
    yield put(sendEmailLinkSuccess());
    yield localStorage.setItem('email', email);
  } catch (e) {
    console.log(e);
    yield put(sendEmailLinkError(e));
  }
}

export function* signInSaga(action) {
  const { email, link } = action;
  console.log(email, link);

  try {
    yield call(authService.signInWithEmailLink, email);
    yield put(signInSuccess());
    yield localStorage.removeItem('email');
    yield call(history.push, '/');
  } catch (e) {
    console.log(e);
    yield put(signInError(e));
    yield call(history.push, '/signin');
  }

}

export function* signOutSaga() {
  console.log('signing out');
  try {
    yield call(authService.signOut);
    yield put(signOutSuccess());
    yield call(history.push, '/signin');
  } catch (e) {
    console.log(e);
    yield put(signOutError(e));
  }
}

export function* checkUserSaga() {
  yield put(getUser());
  const user = yield call(authService.getAuthUser);
  if (user) {
    yield put(getUserSuccess(user));
  } else {
    yield put(getUserError());
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* initAuthSagaWatch() {
  const { user, noUser } = yield race({
    user: take(actions.AUTH_SET_USER),
    noUser: take(actions.AUTH_NO_USER_FOUND),
  });
  if (noUser) {
    yield put(checkEmailLink());
  }
  if (user) {
    // If there is an user, any url is allowed
    // We might to redirect somewhere on refresh
  }
  const isReadyToInit = yield race({
    1: take(actions.AUTH_SET_USER),
    2: take(actions.AUTH_SIGN_IN_SUCCESS),
    3: take(actions.AUTH_SIGN_IN_ERROR),
    4: take(actions.AUTH_CHECK_EMAIL_LINK_ERROR),
  });
  if (isReadyToInit) {
    yield put(init());
  }
}

export function* userStateWatch() {
  function authStateChannel() {
    return eventChannel(emitter => {
      const unsubscribe = authService.onAuthStateChanged(user => {
        if (user) {
          emitter(setUser(user));
        } else {
          emitter(noUserFound());
        }
      });

      return () => unsubscribe();
    });
  }
  const channel = yield call(authStateChannel);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* emailLinkCheckWatch() {
  yield takeLatest(actions.AUTH_CHECK_EMAIL_LINK, emailLinkCheckSaga);
}

export function* sendEmailLinkWatch() {
  yield takeLatest(actions.AUTH_SEND_EMAIL_LINK, sendEmailLinkSaga);
}

export function* signInWatch() {
  yield takeLatest(actions.AUTH_SIGN_IN, signInSaga);
}

export function* signOutWatch() {
  yield takeLatest(actions.AUTH_SIGN_OUT, signOutSaga);
}
