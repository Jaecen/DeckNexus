import React, { Component, PropTypes } from 'react';

import DeckListEntry from './deckListEntry.jsx';

const DeckList = ({deckListing}) => (
	<ul className='deckList'>
		{
			deckListing.listing.map(result => <DeckListEntry key={result} entry={result} />)
		}
	</ul>
);

DeckList.propTypes = {
	deckListing: PropTypes.object
};

export default DeckList;