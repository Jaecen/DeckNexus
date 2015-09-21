import * as Immutable from 'immutable';
import { ADD_DECK, REMOVE_DECK } from '../actions.js';

export default function(state = Immutable.Map(), action) {
	switch(action.type) {
		case ADD_DECK: 
			return state.set(
				action.payload.deck.id, 
				action.payload.deck);
			
		case REMOVE_DECK: 
			return state.delete(action.payload.deckId);

		default: 
			return state;
	}
};