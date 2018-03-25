// Actions for jenkins reducer
import actionNames from './actionNames';

export const saveUrl = (url) => {
  return {
    type: actionNames.SAVE_URL,
    url: url,
  }
}
