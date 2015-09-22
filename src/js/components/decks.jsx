import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import List from './decks/list.jsx';
import Edit from './decks/edit.jsx';


export default class Decks extends Component {
	render() { return (
		<div className='row'>
			<div className='col-md-6'>
				<List
					onItemSelected={ this.props.onDeckSelected }
					decks={ this.props.decks }
					selectedDeck={ this.props.selectedDeck } />
			</div>
			<div className='col-md-6'>
				<Edit deck={ this.props.selectedDeck } />
			</div>
		</div>
	);}
}

Decks.propTypes = {
	decks: ImmutablePropTypes.map.isRequired,
	selectedDeck: React.PropTypes.object.isRequired,
};