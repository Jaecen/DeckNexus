import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import routePaths from '../../routePaths.js';

const TopNav = () => (
	<Navbar fixedTop={true} inverse={true}>
		<IndexLinkContainer to={routePaths.home} activeClassName='active'>
			<NavBrand>DeckNexus</NavBrand>
		</IndexLinkContainer>
		<Nav>
			<LinkContainer to={routePaths.browser} activeClassName='active'>
				<NavItem>Browse</NavItem>
			</LinkContainer>
			<LinkContainer to={routePaths.editor} activeClassName='active'>
				<NavItem>Brew</NavItem>
			</LinkContainer>
		</Nav>
	</Navbar>
);

TopNav.propTypes = {
};

export default TopNav;
