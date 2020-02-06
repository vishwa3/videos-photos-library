import * as types from '../constants/actionTypes';

const initial = {
  videoArray: [],
}

export default function (state = initial, action) {
  switch (action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return {
        ...state,
        videoArray: [...state.videoArray, ...action.videos]
      }
    default:
      return state;
  }
}