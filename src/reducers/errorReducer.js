import * as types from '../constants/actionTypes';

const initialState = {
  error : null,
}

export default function (state=initialState,action) {
  switch(action.type) {
    case types.SEARCH_MEDIA_FAILURE:
      return {
        ...state,
        error:action.error
      }
    default:
      return state;
  }
}