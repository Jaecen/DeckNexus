import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel, Input } from 'react-bootstrap';

const Editor = () => (
	<div className="editor-wrapper">
		<Panel header="Cards">
			<Input type="textarea" label="Mainboard" placeholder="4x Black Lotus..." />
			<Input type="textarea" label="Sideboard" placeholder="4x Blood Moon..." />
		</Panel>
		<Panel header="Description">
			<Input type="textarea" placeholder="textarea" placeholder="How does this deck work?" />
		</Panel>

	</div>
);

Editor.propTypes = {
};

export default connect()(Editor);