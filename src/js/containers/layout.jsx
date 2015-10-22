import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import TopNav from '../components/layout/topNav.jsx';
import Footer from '../components/layout/footer.jsx';

const Layout = ({children}) => (
	<div className='layout'>
		<TopNav />
		<Grid>
			<div className="layout-content" role="main">
				{ children }
			</div>
		</Grid>
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.node
};

export default connect()(Layout);
