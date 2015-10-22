import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { listDecks } from '../actions/actions.js';
import DeckList from '../components/browser/deckList.jsx';

class Browser extends Component {
	componentDidMount() {
		const { listDecks } = this.props;
		listDecks();
	}

	render() {
		const { browser: { deckListing } } = this.props;

		return (
			<div className='browser'>
				<div className='deck-list-wrapper'>
					<DeckList deckListing={deckListing} />
				</div>
			</div>
		);
	}
}

Browser.propTypes = {
	browser: PropTypes.object
};

export default connect(
	(state) => ({ browser: state.browser }),
	{ listDecks }
)(Browser);