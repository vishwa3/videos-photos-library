import { put, call, all } from 'redux-saga/effects';
import { unsplashImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export default function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(unsplashImages, payload);
    const imgArr = images.results;
    yield all([
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      put({ type: types.FLICKR_IMAGES_SUCCESS,images: imgArr }),
      put({ type: types.SELECTED_IMAGE, image: imgArr[0] })
    ]);
  } catch (error) {
    console.log("err",error);
    yield put({ type: 'SEARCH_MEDIA_FAILURE', error });
  }
}