import React, { PropTypes } from 'react';
import { Well, PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import routePaths from '../../routePaths.js';
import Decklist from './decklist.jsx';

const Deck = ({deck, user, name}) => (
	<div className='deck'>
		<PageHeader>
			{name}
			<p><small>by {user}</small></p>
		</PageHeader>
		<Well>
			<Button disabled={true}>Tag</Button>{' '}
			<Button disabled={true}>Fork</Button>{' '}
			<LinkContainer to={`${routePaths.editor}/${user}/${name}`}>
				<Button bsStyle='primary'>Edit</Button>
			</LinkContainer>{' '}
			<Button disabled={true} bsStyle='danger'>Delete</Button>{' '}
		</Well>
		<Decklist decklist={deck.decklist} />
	</div>
);

Deck.propTypes = {
	deck: PropTypes.object,
	user: PropTypes.string,
	name: PropTypes.string,
};

export default Deck;