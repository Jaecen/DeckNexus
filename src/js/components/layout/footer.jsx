import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => (
	<Navbar fixedBottom={true}>
		&copy; 2015 Jason Addington
	</Navbar>
);

Footer.propTypes = {
};

export default Footer;
