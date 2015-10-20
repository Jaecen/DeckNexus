import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import routePaths from '../../routePaths.js';

const DeckListEntry = ({entry}) => (
	<li>
		<Link to={`${routePaths.browser}/${entry}`}>{entry}</Link>
	</li>
);

DeckListEntry.propTypes = {
	entry: PropTypes.string.isRequired,
};

export default DeckListEntry;