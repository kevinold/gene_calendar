import {SHOW_DEVOTION} from '../constants/ActionTypes';

export function showDevotion(index) {
  return {
    type: SHOW_DEVOTION,
    index: index
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
