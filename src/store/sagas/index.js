import { all, fork, takeLatest } from 'redux-saga/effects';

import { initAuth, authStateWatch } from './auth';
import { AUTH_INIT } from '../actions/auth';
import hello from './hello';

function* init() {
  yield initAuth();
}

function* watchers() {
  yield takeLatest(AUTH_INIT, hello);
  yield authStateWatch();
}

export default function* rootSaga() {
  yield all([
    fork(init),
    fork(watchers),
  ]);
};
