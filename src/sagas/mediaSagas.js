import { put, call, takeLatest } from 'redux-saga/effects';
import { unsplashImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export function* searchMediaSaga(action) {
  try {
    yield put({ type: types.RESET_REDUCER_STORE })
    let images, imgArr, videos;
    if (action.payload.searchCategory === "image") {
      images = yield call(unsplashImages, action.payload.searchValue);
      imgArr = images.results;
      if(imgArr.length === 0) {
        throw new Error("No results found for your search criteria.Please change your search");
      }
      yield put({ type: types.FLICKR_IMAGES_SUCCESS, images: imgArr });
    }
    if (action.payload.searchCategory === "video") {
      videos = yield call(shutterStockVideos, action.payload.searchValue);
      if(videos.length === 0) {
        throw new Error("No results found for your search criteria.Please change your search");
      }
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