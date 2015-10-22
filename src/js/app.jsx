import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { routerStateReducer, reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import promiseMiddleware from 'redux-promise';

import Root from './components/root.jsx';
import editorReducer from './reducers/editorReducer.js';
import browserReducer from './reducers/browserReducer.js';
import viewerReducer from './reducers/viewerReducer.js';

const reducer = combineReducers({
	router: routerStateReducer,
	editor: editorReducer,
	browser: browserReducer,
	viewer: viewerReducer,
});

/*********** Store *************
{
	viewer: {
		deck: {
			name: "lantern-control",
			deck: { ... },

			isFetching: false,
			isErrored: false,
			error: { ... },
			updated: 1234567890,
		},
	},
	browser: {
		deckList: {
			decks: [ ... ],
			isFetching: false,
			isErrored: false,
			error: { ... },
			updated: 1234567890,
		},
	}
}
*/

const store = compose(
	applyMiddleware(promiseMiddleware),
	reduxReactRouter({ createHistory }),
	devTools()
)(createStore)(reducer);

ReactDOM.render(
	<Root store={store} />, 
	document.getElementById('root'));