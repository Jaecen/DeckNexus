import React, { Component, PropTypes } from 'react';

const CardLine = ({card}) => (
	<div className='cardLine'>
		{card.quantity} {card.name}
	</div>
);

CardLine.propTypes = {
	card: PropTypes.object
};

export default CardLine;