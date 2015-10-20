import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DeckList from '../components/browser/deckList.jsx';

const Browser = ({browser}) => (
	<div className='browser'>
		<div className='deck-list-wrapper'>
			<DeckList deckListing={browser.deckListing} />
		</div>
		<button onclick={() => {}}>Refresh</button>
	</div>
);

Browser.propTypes = {
	browser: PropTypes.object
};

const mapStateToProps = (state) => ({
	browser: state.browser,
});

export default connect(
	mapStateToProps
)(Browser);