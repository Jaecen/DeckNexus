import { createStore, combineReducers } from 'redux';
import * as Immutable from 'immutable';

import decks from './decks.js';
import selectedDeck from './selectedDeck.js';

const reducer = combineReducers({
  decks: decks,
  selectedDeck: selectedDeck});

export default reducer;