// Actions for jenkins reducer
import actionNames from './actionNames';

export const saveJobs = (jobs) => {
  return {
    type: actionNames.SAVE_JOBS,
    url: actionNames.GET_URL,
    jobs,
  }
}
