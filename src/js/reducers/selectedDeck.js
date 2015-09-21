import { SELECT_DECK } from '../actions.js';

export default function(state = null, action) {
	switch(action.type) {
		case SELECT_DECK:
			return action.payload.deckId;

		default: 
			return state;
	}
};