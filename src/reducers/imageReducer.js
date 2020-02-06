import * as types from '../constants/actionTypes';


const initial = {
  imageArray: [],
}

export default function (state = initial, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return {
        ...state,
        imageArray: [...state.imageArray, ...action.images]
      }

    default:
      return state;
  }
}

