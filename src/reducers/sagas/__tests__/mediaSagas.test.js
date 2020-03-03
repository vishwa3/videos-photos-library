import { runSaga } from 'redux-saga';

import {searchMediaSaga} from '../mediaSagas';
import * as api from '../../Api/api';

test('should handle image load', async () => {
  const dispatchedActions = [];

  const mockedImages = ['img1', 'img2'];
  const mock = {
    results: ['img1', 'img2']
  }
  api.unsplashImages = jest.fn(() => Promise.resolve(mock));

  const fakeStore = {
    getState: () => ({value: 'test'}),
    dispatch: (action) => dispatchedActions.push(action),
  }
  

  const action = {
    type:"SEARCH_MEDIA_REQUEST",
    payload: {
      searchValue: "dakota",
searchCategory: "image"
    }
  }

  await runSaga(fakeStore,searchMediaSaga,action).done;
  
  expect(api.unsplashImages.mock.calls.length).toBe(1); 
  expect(dispatchedActions).toContainEqual({ type: 'FLICKR_IMAGES_SUCCESS', images: mockedImages });
})

test('should handle video load', async () => {
  const dispatchedActions = [];

  const mockedVideos = ['imvid1g1', 'vid2'];
  const mock = {
    results: ['vid1', 'vid2']
  }
  api.shutterStockVideos = jest.fn(() => Promise.resolve(mockedVideos));

  const fakeStore = {
    getState: () => ({value: 'test'}),
    dispatch: (action) => dispatchedActions.push(action),
  }
  

  const action = {
    type:"SEARCH_MEDIA_REQUEST",
    payload: {
      searchValue: "dakota",
searchCategory: "video"
    }
  }

  await runSaga(fakeStore,searchMediaSaga,action).done;
  expect(api.shutterStockVideos.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual({ type: 'SHUTTER_VIDEOS_SUCCESS', videos: mockedVideos });
})

test('should handle image load errors in case of failure', async () => {
  
  const dispatchedActions = [];
  const error = 'API server is down';
  api.unsplashImages = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    getState: () => ({value: 'test'}),
    dispatch: (action) => dispatchedActions.push(action),
  }

  const action = {
    type:"SEARCH_MEDIA_REQUEST",
    payload: {
      searchValue: "dakota",
searchCategory: "image"
    }
  }

  await runSaga(fakeStore,searchMediaSaga,action).done;
  expect(dispatchedActions).toContainEqual({type:'SEARCH_MEDIA_FAILURE',error});

})
