import { unsplashImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';

/* export default function searchMediaThunk(payload) {
  return dispatch => {
    shutterStockVideos(payload)
  }
} */

/* const searchMediaThunk = (payload) => (dispatch) => {
   shutterStockVideos(payload).then((videos) =>{
    console.log("thunk",videos);
    dispatch({type:types.SHUTTER_VIDEOS_SUCCESS,videos})
  }).catch(err=>{
    console.log("err",err)
  })
  unsplashImages(payload).then((response) =>{
    const images = response.results;
    dispatch({type:types.FLICKR_IMAGES_SUCCESS,images})
  }).catch(err => {
    console.log("err",err);
  })
} */

const searchMediaThunk = (payload) => (dispatch) => {
  try {
    dispatch({type:types.RESET_REDUCER_STORE});
    shutterStockVideos(payload).then((videos) =>{
      dispatch({type:types.SHUTTER_VIDEOS_SUCCESS,videos})
      dispatch({type:types.SELECTED_VIDEO,video:videos[0]})
    }).then(unsplashImages(payload).then((response) =>{
      const images = response.results;
      dispatch({type:types.FLICKR_IMAGES_SUCCESS,images})
      dispatch({type:types.SELECTED_IMAGE,image:images[0]})
    }))
  } catch(error) {
    console.log("err",error);
    dispatch({type:'SEARCH_MEDIA_FAILURE',error})
  }
}

export default searchMediaThunk;