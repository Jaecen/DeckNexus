import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import List from './decks/list.jsx';
import Entry from './decks/entry.jsx';


export default class Decks extends Component {
	render() { return (
		<div className='row'>
			<div className='col-md-6'>
				<List decks={ this.props.decks } onItemSelected = { this.props.onDeckSelected } />
			</div>
			<div className='col-md-6'>
				<Entry deck={ this.props.selectedDeck } />
			</div>
		</div>
	);}
}

Decks.propTypes = {
	decks: ImmutablePropTypes.map.isRequired,
	selectedDeck: React.PropTypes.object.isRequired,
};