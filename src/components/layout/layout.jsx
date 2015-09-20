import React from 'react'; 
import TopNav from './topNav.jsx';
import Footer from './footer.jsx';

export default class extends React.Component {
	render() { return (
		<div>
			<TopNav />
			<div className="container" role="main">
				{ this.props.children }
			</div>
			<Footer />
		</div>
	);}
};