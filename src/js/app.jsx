import 'bootstrap';
import 'jquery';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app.jsx';
import reducer from './reducers/app.js';

// This would come from an API... if I had one =(
var initialState = {
	decks: {
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
	},
};

var store = createStore(reducer, initialState);

// Log the initial state
console.log('inital state', store.getState());

// Every time the state changes, log it
store.subscribe(() =>
  console.log('state change', store.getState())
);

React.render(
	<Provider store={ store }>
		{ () => <App /> }
	</Provider>,
	document.body);