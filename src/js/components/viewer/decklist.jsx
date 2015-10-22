import React, { Component, PropTypes } from 'react';

import Board from './board.jsx';

const Decklist = ({decklist}) => (
	<div className='decklist'>
		{ decklist.boards.map(board => <Board key={board.type} board={board} /> )}
	</div>
);

Decklist.propTypes = {
	decklist: PropTypes.object
};

export default Decklist;