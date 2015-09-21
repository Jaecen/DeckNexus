import React from 'react';
import { connect } from 'react-redux';

import { selectDeck } from '../actions.js'

import Layout from './layout.jsx';
import Decks from './decks.jsx';

// TODO: Use https://github.com/faassen/reselect for better performance.
function transform(state) {
	return {
		decks: state.decks,
		selectedDeck: state.decks.get(String(state.selectedDeck)),	// TODO: Map expects keys to be strings. Not sure why.
	};
}

class App extends React.Component {
	render() {
		const { dispatch, decks, selectedDeck } = this.props;
		return (
			<Layout>
				<Decks
					decks={ decks }
					selectedDeck={ selectedDeck }
					onDeckSelected={ deckId => dispatch(selectDeck(deckId)) } />
			</Layout>
		);
	}
}

export default connect(transform)(App);