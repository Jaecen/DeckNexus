import React, { PropTypes, Component } from 'react';

export default class Edit extends Component {
	render() { return (
		<div>
			<div className='form-group'>
				<input 
					type='text' 
					className='form-control' 
					placeholder='Legacy Storm' 
					value={ this.props.editor.name } 
					onChange={ event => this.props.onEditorChangeName(event.target.value) } />
			</div>
			<div className='form-group'>
				<textarea 
					className='form-control' 
					placeholder='4 Black Lotus' 
					value={ this.props.editor.decklist } 
					onChange={ event => this.props.onEditorChangeDecklist(event.target.value) } />
			</div>
			<div className='form-group'>
				<button 
					className='btn btn-primary btn-block'
					onClick={ event => this.props.onDeckUpdate({
						id: this.props.editor.id,
						name: this.props.editor.name, 
						decklist: this.props.editor.decklist
					}) }>
					Save Changes
				</button>
			</div>
		</div>
	);}
}

Edit.propTypes = {
	onDeckUpdate: PropTypes.func.isRequired,
	onEditorChangeName: PropTypes.func.isRequired,
	onEditorChangeDecklist: PropTypes.func.isRequired,
	editor: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		decklist: PropTypes.string,
	}).isRequired
};