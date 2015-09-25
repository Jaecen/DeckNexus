import * as Actions from '../actions.js';

const initialState = {
	 name: '', 
	 decklist: ''
};

export default function(state = initialState, action) {
	switch(action.type) {
		case Actions.EDITOR_CHANGE_NAME: 
			return Object.assign(
				{},
				state,
				{
					name: action.payload.name 
				});
			
		case Actions.EDITOR_CHANGE_DECKLIST: 
			return Object.assign(
				{},
				state,
				{
					decklist: action.payload.decklist 
				});

		case Actions.DECK_SELECT:
			return Object.assign(
				{},
				state,
				{
					id: action.payload.deck.id,
					name: action.payload.deck.name,
					decklist: action.payload.deck.decklist
				});

		case Actions.DECK_ADD:
			return Object.assign(
				{},
				state,
				{
					id: null,
					name: '',
					decklist: ''
				});

		default: 
			return state;
	}
};