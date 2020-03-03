import { combineReducers } from "redux";
import img from "./imageReducer";
import vid from "./videoReducer";
import errorReducer from "./errorReducer";
import * as types from "../constants/actionTypes";

const appReducer = combineReducers({
  img,
  vid,
  errorReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.RESET_REDUCER_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
