import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const Home = () => (
	<div className="home-wrapper">
		This is the home page!
	</div>
);

Home.propTypes = {
};

export default connect()(Home);