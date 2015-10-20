import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Layout from '../containers/layout.jsx'
import Home from '../containers/home.jsx'
import Editor from '../containers/editor.jsx'
import Browser from '../containers/browser.jsx'
import Viewer from '../containers/viewer.jsx'

import routePaths from '../routePaths.js';

const Root = ({store}) => (
	<div className='root'>
		<Provider store={store}>
			<ReduxRouter>
				<Route path={routePaths.home} component={Layout}>
					<IndexRoute component={Home} />
					<Route path={routePaths.browser} component={Browser} />
					<Route path={routePaths.editor} component={Editor} />
					<Route path={`${routePaths.viewer}/:hash`} component={Viewer} />
					<Route path={`${routePaths.viewer}/:user/:name`} component={Viewer} />
				</Route>
			</ReduxRouter>
		</Provider>
		<DebugPanel top right bottom>
			<DevTools store={store} monitor={LogMonitor} />
		</DebugPanel>
	</div>
);

Root.propTypes = {
	store: React.PropTypes.object.isRequired
}

export default Root;