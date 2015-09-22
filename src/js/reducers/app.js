import { createStore, combineReducers } from 'redux';

import decks from './decks.js';
import selectedDeck from './selectedDeck.js';
import editor from './editor.js';

const reducer = combineReducers({
  decks: decks,
  selectedDeck: selectedDeck,
  editor: editor});

export default reducer;