import {TITLE_CHANGED} from '../constants/ActionTypes';

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text
  }
}

/*export function requestInitialData() {
  return (dispatch, getState) => {
    return dispatch(requestInitialData());
  };
}

// Fetches data and relies on Redux Thunk middleware.
export function fetchData() {
}*/
