import 'bootstrap';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as Immutable from 'immutable';

import App from './components/app.jsx';

import reducer from './reducers/app.js';

// This would come from an API... if I had one =(
var initialState = {
	decks: Immutable.Map({
		1: {
			id: 1,
			name: 'Superfriends',
			decklist: '20 Planeswalkers',
		},
		2: {
			id: 2,
			name: 'Jund',
			decklist: '4 Bloodbraid Elf',
		},
		3: {
			id: 3,
			name: 'Goblins',
			decklist: '4 Goblin Guide',
		},
		4: {
			id: 4,
			name: 'Abzan Junk',
			decklist: '4 Siege Rhino',
		},
	}),
	selectedDeck: 1,
};

var store = createStore(reducer, initialState);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
store.subscribe(() =>
  console.log(store.getState())
);

React.render(
	<Provider store={ store }>
		{ () => <App /> }
	</Provider>,
	document.body);