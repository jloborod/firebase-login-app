import { all, fork, spawn } from 'redux-saga/effects';

import {
  initAuthSagaWatch,
  sendEmailLinkWatch,
  emailLinkCheckWatch,
  signInWatch,
  signOutWatch,
  userStateWatch,
} from './auth';


function* watchers() {
  yield all([
    spawn(userStateWatch),
    spawn(initAuthSagaWatch),
    spawn(sendEmailLinkWatch),
    spawn(emailLinkCheckWatch),
    spawn(signInWatch),
    spawn(signOutWatch),
  ]);
}

export default function* rootSaga() {
  yield all([
    // fork(init),
    fork(watchers)
  ]);
}
