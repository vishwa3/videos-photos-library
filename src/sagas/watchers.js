import { takeLatest } from 'redux-saga/effects';
import  searchMediaSaga  from './mediaSagas';
import * as types from '../constants/actionTypes';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchMedia() {
  yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}