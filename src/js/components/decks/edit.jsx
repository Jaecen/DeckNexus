import React, { PropTypes, Component } from 'react';

export default class Entry extends Component {
	render() { return (
		<div>
			<div>
				<input type='text' placeholder='Legacy Storm' value={ this.props.deck.name } />
			</div>
			<div>
				<textarea placeholder='4 Black Lotus' value={ this.props.deck.decklist } />
			</div>
		</div>
	);}
}

Entry.propTypes = {
	deck: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		decklist: PropTypes.string,
	}).isRequired
};