import * as ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
  devotion: undefined,
  title: 'Home',
  entries: [
    {
      id: 1,
      title: 'Jesus is the Gravy to our biscuit',
      description: 'Jesus gives us joy when we come to him with our problems.',
      scriptures: [{
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
});

export default function devotions(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_DEVOTION:
      var devotion = state.entries[action.index - 1];
      return state.merge({
        devotion: devotion
      });
    default:
      return state;
  }
}
