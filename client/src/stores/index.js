import { createStore, applyMiddleware, combineReducers } from 'redux';
import { router5Middleware, router5Reducer } from 'redux-router5';

// Other reducers
import jenkinsReducer from '../reducers/jenkins';

const configureStore = (router) => {
  // Apply the
  let createStoreWithMiddleware = applyMiddleware(
    router5Middleware(router)
  )(createStore);
  // Create and return the store
  return createStoreWithMiddleware(combineReducers({
    router: router5Reducer,
    jenkins: jenkinsReducer
  }));
}

export default configureStore;
