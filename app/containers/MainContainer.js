import React from 'react';

function MainContainer({ children }) {
	return (
		<div className="main-container">
			{children}
		</div>
	);
}

MainContainer.propTypes = {
	children: React.PropTypes.node,
};

export default MainContainer;
