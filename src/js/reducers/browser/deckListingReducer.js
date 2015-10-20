import * as Actions from '../../actions/actions.js';

const defaultState = {
	isFetching: false,
	isErrored: false,
	errorMessage: null,
	listing: [],
};

function reduce(state = defaultState, action) {
	switch(action.type) {
		case Actions.LIST_DECKS:
		case Actions.LIST_DECKS_BY_USER:
			return Object.assign({}, state, {
				isFetching: false,
				isErrored: false,
				errorMessage: null,
				listing: action.payload,
			});

		default:
			return state;
	}
}

export default reduce;