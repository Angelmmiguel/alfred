// Get the action names
import actionNames from '../actions/actionNames';

// Initial state
const initialState = {
  // Jobs
  jobs: []
}

// Reducer
const jenkinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.SAVE_JOBS:
      return Object.assign({}, state, {
        jobs: action.jobs,
      });
    default:
      return state;
  }
}

export default jenkinsReducer;
