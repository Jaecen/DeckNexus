import React, { PropTypes, Component } from 'react';

export default class Item extends Component {
	render() { return (
		<div onClick={ e => this.props.onItemSelected(this.props.deck.id) }>
			<span>{ this.props.deck.name }</span>
			<text> </text>
			<span style={{ fontStyle: 'italic' }}>({ this.props.deck.id })</span>
		</div>
	);}
}

Item.propTypes = {
	onItemSelected: PropTypes.func.isRequired,
	deck: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	})
};