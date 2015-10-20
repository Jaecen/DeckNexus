import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getDeckByName } from '../actions/actions.js';
import Board from '../components/viewer/board.jsx';

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
				<h1>
					{name}
					<small>by {user}</small>
				</h1>
				<div className="row">
					<div className="col-md-6">
						<Board board={deck.deck.decklist.boards[0]} />
					</div>
					<div className="col-md-6">
						<Board board={deck.deck.decklist.boards[1]} />
					</div>
				</div>
			</div>
		);
	}
}

Viewer.propTypes = {
	viewer: PropTypes.object
};

export default connect(
	state => ({ viewer: state.viewer }),
	{ getDeckByName }
)(Viewer);