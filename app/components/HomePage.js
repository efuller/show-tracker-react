import React, { PropTypes } from 'react';

const HomePage = ({ status }) => (<div><h1>{status}</h1></div>);

HomePage.propTypes = {
	status: PropTypes.string,
};

export default HomePage;
