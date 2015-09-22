import React, { PropTypes, Component } from 'react';
import Item from './item.jsx';

export default class List extends Component {
	render() {
		return (
			<div className='list-group'>
				{
					Object
						.keys(this.props.decks)
						.map(value => this.props.decks[value])
						.map(deck => <Item
							key={ deck.id }
							deck={ deck }
							isSelected = { this.props.selectedDeck && this.props.selectedDeck.id === deck.id }
							onDeckRemove={ this.props.onDeckRemove } 
							onDeckSelect={ this.props.onDeckSelect } 
							/> )
				}
			</div>
		);
	}
}

List.propTypes = {
	decks: PropTypes.object.isRequired,
	selectedDeck: PropTypes.object,
};