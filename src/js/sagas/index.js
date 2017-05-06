import { fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* dummy() {
  yield delay(1000);
  console.log('delay 1000');
}

export default function* rootSaga() {
  yield fork(dummy);
}
