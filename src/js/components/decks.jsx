import React, { PropTypes, Component } from 'react';
import List from './decks/list.jsx';
import Edit from './decks/edit.jsx';

export default class Decks extends Component {
	render() { return (
		<div className='row'>
			<div className='col-md-3'>
				<List
					onDeckSelect={ this.props.onDeckSelect }
					onDeckRemove={ this.props.onDeckRemove }
					decks={ this.props.decks }
					selectedDeck={ this.props.selectedDeck } />
					
				<div className='form-group'>
					<button 
						type="button" 
						className='btn btn-default btn-block form-control'
						onClick={ this.props.onDeckAdd }>
						<span className="glyphicon glyphicon-plus"></span> Add New Deck
					</button>
				</div>
			</div>
			<div className='col-md-9'>
				<Edit
					onEditorChangeName={ this.props.onEditorChangeName }
					onEditorChangeDecklist={ this.props.onEditorChangeDecklist }
					onDeckUpdate={ this.props.onDeckUpdate }
					 
					editor={ this.props.editor } />
			</div>
		</div>
	);}
}

Decks.propTypes = {
	decks: PropTypes.object.isRequired,
	selectedDeck: PropTypes.object.isRequired,
};