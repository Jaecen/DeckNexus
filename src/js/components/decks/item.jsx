import React, { PropTypes, Component } from 'react';

const selectedStyle = {
	backgroundColor: '#CCC',
};


export default class Item extends Component {
	render() { 
		const appliedStyle = this.props.isSelected
			? selectedStyle
			: {};
			
		return (
			<div style={ appliedStyle } onClick={ e => this.props.onItemSelected(this.props.deck.id) }>
				<span>{ this.props.deck.name }</span>
				<text> </text>
				<span style={{ fontStyle: 'italic' }}>({ this.props.deck.id })</span>
			</div>
		);
	}
}

Item.propTypes = {
	onItemSelected: PropTypes.func.isRequired,
	isSelected: PropTypes.bool,
	deck: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	})
};