import React, { Component } from 'react';

import HomePage from '../components/HomePage';

class HomePageContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: 'React App Is Ready!',
		};
	}

	render() {
		const status = this.state.status;
		return (
			<HomePage status={status} />
		);
	}
}

export default HomePageContainer;
