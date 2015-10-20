import { combineReducers } from 'redux';

import deckListingReducer from './browser/deckListingReducer.js';

export default combineReducers({
	deckListing: deckListingReducer,
});