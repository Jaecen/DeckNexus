import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Item from './item.jsx';

export default class List extends Component {
	render() { return (
		<div>
			{ 
				this.props.decks.map((deck) => 
					<Item key={ deck.id } deck={ deck } onItemSelected={ this.props.onItemSelected } />
				) 
			}
		</div>
	);}
}

List.propTypes = {
	decks: ImmutablePropTypes.map.isRequired,
};