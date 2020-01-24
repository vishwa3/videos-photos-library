import * as types from '../constants/actionTypes';

export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

export const searchMediaAction = (searchValue,searchCategory) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload : {
    searchValue,
    searchCategory
  }
});

