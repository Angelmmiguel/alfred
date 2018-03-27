// Get the action names
import actionNames from '../actions/actionNames';

// Store the data in the storage
const STORAGE_KEY = 'current_jobs';
const JENKINS_URL = 'jenkins_url';

// Initial state
let initialState = {}

if (window.localStorage !== undefined) {
  initialState.jobs = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  initialState.url = window.localStorage.getItem(JENKINS_URL) || '';
} else {
  initialState.jobs = [];
  initialState.url = '';
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
    case actionNames.SAVE_URL:
      // Storage in localStorage
      if (window.localStorage !== undefined) {
        window.localStorage.setItem(JENKINS_URL, action.url);
      }
      // Update the state
      return Object.assign({}, state, {
        url: action.url,
      });
     default:
      return state;
  }
}

export default jenkinsReducer;
