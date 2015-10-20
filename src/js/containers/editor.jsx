import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const Editor = () => (
	<div className="editor-wrapper">
		This is the editor!
	</div>
);

Editor.propTypes = {
};

export default connect()(Editor);