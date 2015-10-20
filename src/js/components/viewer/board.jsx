import React, { Component, PropTypes } from 'react';

const Board = ({board}) => (
	<div className='board-wrapper'>
		<div>{board.type}:</div>
		<div>
			{board.cards.map(card => (
				<div key={card.name}>
					{card.quantity} {card.name}
				</div>))}
		</div>
	</div>
);

Board.propTypes = {
	board: PropTypes.object
};

export default Board;