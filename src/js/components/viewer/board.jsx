import React, { Component, PropTypes } from 'react';

import CardLine from './cardLine.jsx';

const Board = ({board}) => (
	<div className='board'>
		<h3>{board.type}</h3>
		<div>
			{board.cards.map(card => <CardLine key={card.name} card={card} />)}
		</div>
	</div>
);

Board.propTypes = {
	board: PropTypes.object
};

export default Board;