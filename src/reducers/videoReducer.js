//import initialState from './initialState';
import * as types from '../constants/actionTypes';

/* export default function (state = initialState.videos, action) {
  switch (action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos];
    case types.SELECTED_VIDEO:
      return { ...state, selectedVideo: action.video };
    default:
      return state;
  }
} */

/* const initialState = {
  videos:{
    videoArray:[],
    selectedVideo:{}
  }
} */

/* export default function (state = initialState,action) {
  switch(action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return {
        ...state, 
        videos: {
        ...state.videos.videoArray,...action.videos
      }
    }
    case types.SELECTED_VIDEO:
      return {
        ...state,
        images: {
          ...state.videos.selectedVideo,...action.video
        }
      }
       default:
      return state;
  }
} */

/* export default function (state = initialState,action) {
  switch(action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return { 
        videos: {
        ...state.videos,
        videoArray: [
            ...state.videos.videoArray,...action.videos
         ]
      }
    }
case types.SELECTED_VIDEO:
      return {
        videos: {
          ...state.videos,
          selectedVideo: {
            ...state.videos.selectedVideo, ...action.video
          }

        }
      }
      default:
        return state;
   }  
  } */

  const initial = {
    videoArray:[],
      selectedVideo:{}
  }
  
  export default function (state=initial,action) {
    switch(action.type) {
      case types.SHUTTER_VIDEOS_SUCCESS:
        return {
          ...state,
          videoArray:[...state.videoArray,...action.videos]
        }
        case types.SELECTED_VIDEO:
          return {
            ...state,
            selectedVideo:{...state.selectedVideo,...action.video}
          }
          default:
            return state;
    }
  }