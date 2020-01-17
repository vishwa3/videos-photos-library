import { combineReducers } from 'redux';
import img from './imageReducer';
import vid from './videoReducer';
import * as types from '../constants/actionTypes';
// Combines all reducers to a single reducer function
/* const rootReducer = combineReducers({
  img, 
  vid
}); */

const appReducer = combineReducers({
  img, 
  vid
});

const rootReducer = (state, action) => {
  if (action.type === types.RESET_REDUCER_STORE) {
    console.log("action",action)
    state = undefined
   /*  if(action.callback) {
      action.callback();
    } */
  }
 return appReducer(state, action)
}

export default rootReducer;