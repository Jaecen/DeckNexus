import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import routePaths from '../../routePaths.js';

const TopNav = () => (
	<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<IndexLink to={routePaths.home} className="navbar-brand" activeClassName='active'>DeckNexus</IndexLink>
			</div>
			<div id="navbar" className="navbar-collapse collapse">
				<ul className="nav navbar-nav">
					<li>
						<Link to={routePaths.browser} activeClassName='active'>Browse</Link>
					</li>
					<li>
						<Link to={routePaths.editor} activeClassName='active'>Brew</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

TopNav.propTypes = {
};

export default TopNav;
