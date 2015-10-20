import { combineReducers } from 'redux';

import deckReducer from './viewer/deckReducer.js';

export default combineReducers({
	deck: deckReducer,
});