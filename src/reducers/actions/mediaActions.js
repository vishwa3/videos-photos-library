import * as types from "../constants/actionTypes";

export const searchMediaAction = (searchValue, searchCategory) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload: {
    searchValue,
    searchCategory
  }
});
