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
    state = undefined
  }
 return appReducer(state, action)
}

export default rootReducer;