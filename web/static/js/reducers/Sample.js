import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  title: 'Home',
  entries: [
    {
      id: 1,
      title: 'Jesus is the Gravy to our biscuit',
      description: 'Jesus gives us joy when we come to him with our problems.',
      verses: [{
        display: "James 1:1",
        book: "James",
        chapter: 1,
        verse: 1
      },
      {
        display: "James 2:3",
        book: "James",
        chapter: 2,
        verse: 3
      }]
    }
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TITLE_CHANGED:
      return {...state, title: action.text};
    default:
      return state;
  }
}
