import { put } from 'redux-saga/effects';

import { sayHello } from '../actions/hello';

export default function* helloSaga() {
  yield put(sayHello());
};
