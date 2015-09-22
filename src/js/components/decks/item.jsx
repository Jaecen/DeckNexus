import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class Item extends Component {
	render() {
		const appliedClassName = classNames(
			'list-group-item', 
			{'active': this.props.isSelected },
			'clearfix');
			
		return (
			<a 
				href='#'
				className={ appliedClassName } 
				onClick={ event => this.props.onDeckSelect(this.props.deck) }> 
				{ this.props.deck.name } ({ this.props.deck.id })
				<span className="pull-right">
					<button 
						type="button" 
						className="btn btn-danger"
						onClick={ event => this.props.onDeckRemove(this.props.deck) }>
						<span className="glyphicon glyphicon-remove"></span> Delete
					</button>
				</span>
			</a>
		);
	}
}

Item.propTypes = {
	onDeckSelect: PropTypes.func.isRequired,
	onDeckRemove: PropTypes.func.isRequired,
	isSelected: PropTypes.bool,
	deck: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	})
};