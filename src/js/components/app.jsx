import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions.js'

import Layout from './layout.jsx';
import Decks from './decks.jsx';

function transform(state) {
	return Object.assign(
		{},
		state, {
			selectedDeck: state.decks[state.selectedDeck]
		});
}

class App extends React.Component {
	render() {
		const { dispatch } = this.props;
		
		return (
			<Layout>
				<Decks
					decks={ this.props.decks }
					selectedDeck={ this.props.selectedDeck }
					editor={ this.props.editor }
					
					onDeckAdd={ () => dispatch(Actions.deckAdd()) }
					onDeckRemove={ deckId => dispatch(Actions.deckRemove(deckId)) }
					onDeckSelect={ deckId => dispatch(Actions.deckSelect(deckId)) }
					onDeckUpdate={ deck => dispatch(Actions.deckUpdate(deck)) }
					
					onEditorChangeName={ name => dispatch(Actions.editorChangeName(name)) }
					onEditorChangeDecklist={ decklist => dispatch(Actions.editorChangeDecklist(decklist)) }
					/>
			</Layout>
		);
	}
}

export default connect(transform)(App);