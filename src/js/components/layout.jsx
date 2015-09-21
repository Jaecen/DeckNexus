import React from 'react'; 
import TopNav from './layout/topNav.jsx';
import Footer from './layout/footer.jsx';

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