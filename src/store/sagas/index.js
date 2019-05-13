import { put, takeLatest } from 'redux-saga/effects';

import { INIT, sayHello } from '../actions';

export function* helloReduxSaga() {
  console.log('Hello there');
  yield put(sayHello());
};

export default function* watchSaga() {
  yield takeLatest(INIT, helloReduxSaga);
}
