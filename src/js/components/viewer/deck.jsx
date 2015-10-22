import React, { PropTypes } from 'react';
import { Well, PageHeader, Button } from 'react-bootstrap';

import Decklist from './decklist.jsx';

const Deck = ({deck, user, name}) => (
	<div className='deck'>
		<PageHeader>
			{name}
			<p><small>by {user}</small></p>
		</PageHeader>
		<Well>
			<Button>Tag</Button>{' '}
			<Button>Fork</Button>{' '}
			<Button bsStyle='primary'>Edit</Button>{' '}
			<Button bsStyle='danger'>Delete</Button>{' '}
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