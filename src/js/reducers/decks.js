import * as Actions from '../actions.js';

const initialState = {};

export default function(state = initialState, action) {
	switch(action.type) {
		case Actions.DECK_ADD: 
			return state;
			
		case Actions.DECK_REMOVE:
			let newState = Object.assign(
				{},
				state);
			delete newState[action.payload.deck.id];
			return newState;

		case Actions.DECK_UPDATE: 
			return Object.assign(
				{},
				state,
				{
					[action.payload.deck.id]: action.payload.deck 
				});

		default: 
			return state;
	}
};