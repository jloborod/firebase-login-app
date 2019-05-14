import { all, fork, spawn } from 'redux-saga/effects';

import {
  initAuth,
  userStateWatch,
  sendEmailLinkWatch,
  signInWatch,
  initAuthWatch,
} from './auth';

function* init() {
  yield initAuth();
}

function* watchers() {
  yield all([
    spawn(userStateWatch),
    spawn(sendEmailLinkWatch),
    spawn(initAuthWatch),
    spawn(signInWatch),
  ]);
}

export default function* rootSaga() {
  yield all([
    fork(init),
    fork(watchers)
  ]);
}
