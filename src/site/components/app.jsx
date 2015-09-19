import React from 'react';
import HelloWorld from './deck/deckEntry.jsx';

console.log(HelloWorld);

// ES6 woot!
const sqr = (x) => x * x;
sqr(2);

React.render(
	<HelloWorld />,
	document.body
);

console.log(sqr(5));