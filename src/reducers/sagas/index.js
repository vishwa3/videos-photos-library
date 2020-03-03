import { fork } from 'redux-saga/effects';
import watchSearchMedia from './mediaSagas';

export default function* startForman() {
  yield fork(watchSearchMedia);
}
