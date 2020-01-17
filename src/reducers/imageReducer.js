//import initialState from './initialState';
import * as types from '../constants/actionTypes';

/* export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}
 */
/* const initialState = {
  images:{
    imageArray:[],
    selectedImage:{}
  },
} */

const initial = {
  imageArray:[],
    selectedImage:{}
}

export default function (state=initial,action) {
  switch(action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return {
        ...state,
        imageArray:[...state.imageArray,...action.images]
      }
      case types.SELECTED_IMAGE:
        return {
          ...state,
          selectedImage:{...state.selectedImage,...action.image}
        }
        default:
          return state;
  }
}

/* export default function (state = initialState,action) {
  switch(action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return {
        ...state, 
        images: {
        ...state.images.imageArray,...action.images
      }
    }
    case types.SELECTED_IMAGE:
      return {
        ...state,
        images: {
          ...state.images.selectedImage,...action.image
        }
      }
      default:
        return state;
  }
}
 */
/* export default function (state = initialState,action) {
  switch(action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return { 
        images: {
        ...state.images,
        imageArray: [
            ...state.images.imageArray,...action.images
         ]
      }
    }
case types.SELECTED_IMAGE:
      return {
        images: {
          ...state.images,
          selectedImage: {
            ...state.images.selectedImage, ...action.image
          }

        }
      }
      default:
        return state;
   }  
  } */
