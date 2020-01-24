import { put, call, all, takeLatest } from 'redux-saga/effects';
import { unsplashImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export function* searchMediaSaga({ payload }) {
  try {
    yield put({ type: types.RESET_REDUCER_STORE })
    let images, imgArr, videos;
    if (payload.searchCategory == "image") {
      images = yield call(unsplashImages, payload.searchValue);
      imgArr = images.results;
      yield put({ type: types.FLICKR_IMAGES_SUCCESS, images: imgArr });
    }
    if (payload.searchCategory == "video") {
      videos = yield call(shutterStockVideos, payload.searchValue);
      yield put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos });
    }
  } catch (error) {
    console.log("err", error);
    yield put({ type: 'SEARCH_MEDIA_FAILURE', error: error.toString() });
  }
}

export default function* watchSearchMedia() {
  yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}