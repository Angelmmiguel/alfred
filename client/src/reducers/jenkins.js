// Get the action names
import actionNames from '../actions/actionNames';

// Store the data in the storage
const STORAGE_KEY = 'current_jobs';

// Initial state
let initialState = {}

if (window.localStorage !== undefined) {
  initialState.jobs = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
} else {
  initialState.jobs = [];
}

// Reducer
const jenkinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.SAVE_JOBS:
      // Storage in localStorage
      if (window.localStorage !== undefined) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(action.jobs));
      }
      // Update the state
      return Object.assign({}, state, {
        jobs: action.jobs,
      });
    case actionNames.GET_URL:
      fetch('jenkins').then((data) => {
        Object.assign({}, state, {
          url: data.body.url,
        });
      });
    default:
      return state;
  }
}

export default jenkinsReducer;
