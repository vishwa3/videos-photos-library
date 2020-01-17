import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas'; // TODO: Next step
import thunk from "redux-thunk";

//  Returns the store instance
// It can  also take initialState argument when provided
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); 
  return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware,thunk)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;