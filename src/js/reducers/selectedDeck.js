import { DECK_SELECT } from '../actions.js';

const initialState = null;

export default function(state = initialState, action) {
	switch(action.type) {
		case DECK_SELECT:
			return action.payload.deck.id;

		default: 
			return state;
	}
};