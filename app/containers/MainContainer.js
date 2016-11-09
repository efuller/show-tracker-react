import React from 'react';

import Header from '../components/Header';

function MainContainer({ children }) {
	return (
		<div>
			<Header/>
			<div className="container is-12">
				{children}
			</div>
		</div>
	);
}

MainContainer.propTypes = {
	children: React.PropTypes.node,
};

export default MainContainer;
