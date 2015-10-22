import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getDeckByName } from '../actions/actions.js';
import Deck from '../components/viewer/deck.jsx';

class Viewer extends Component {
	componentDidMount() {
		const { getDeckByName, params: { name, user } } = this.props;
		getDeckByName(user, name);
	}

	render() {
		const { params: { name, user }, viewer: { deck } } = this.props;

		if(!deck || !deck.deck) {
			return (
				<div className='viewer'>
					Nothing to see here (yet)
				</div>
			);
		}

		return (
			<div className='viewer'>
				<Deck deck={deck.deck} user={user} name={name} />
			</div>
		);
	}
}

Viewer.propTypes = {
	viewer: PropTypes.object,
};

export default connect(
	state => ({ viewer: state.viewer }),
	{ getDeckByName }
)(Viewer);