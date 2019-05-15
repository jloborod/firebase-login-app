import { all, fork, spawn } from 'redux-saga/effects';

import {
  initAuthSagaWatch,
  sendEmailLinkWatch,
  emailLinkCheckWatch,
  signInWatch,
  userStateWatch,
} from './auth';


function* watchers() {
  yield all([
    spawn(initAuthSagaWatch),
    spawn(userStateWatch),
    spawn(sendEmailLinkWatch),
    spawn(signInWatch),
    spawn(emailLinkCheckWatch),
  ]);
}

export default function* rootSaga() {
  yield all([
    // fork(init),
    fork(watchers)
  ]);
}
