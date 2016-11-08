import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Import your container elements here.
import MainContainer from '../containers/MainContainer';
import HomeContainer from '../containers/HomeContainer';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={MainContainer}>
			<IndexRoute component={HomeContainer} />
		</Route>
	</Router>
);

export default routes;
