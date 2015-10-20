import * as Actions from '../../actions/actions.js';

const defaultState = {
	isFetching: false,
	isErrored: false,
	errorMessage: null,
	deck: null,
};

function reduce(state = defaultState, action) {
	switch(action.type) {
		case Actions.GET_DECK_BY_HASH:
		case Actions.GET_DECK_BY_NAME:
			return Object.assign({}, state, {
				isFetching: false,
				isErrored: false,
				errorMessage: null,
				deck: action.payload,
			});

		default:
			return state;
	}
}

export default reduce;