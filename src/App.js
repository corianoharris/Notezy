import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Auth0Provider,
	withAuthenticationRequired,
} from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';

import CreateNote from './components/CreateNote';
import DisplayNotes from './components/DisplayNotes';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import ProtectedPageLoader from './components/ProtectedPageLoader';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// history
const history = createBrowserHistory();

// protected route
const ProtectedRoute = ({ component, ...args }) => (
	<Route
		component={withAuthenticationRequired(component, {
			onRedirecting: () => <ProtectedPageLoader />,
		})}
		{...args}
	/>
);

const onRedirectCallback = (appState) => {
	// Use the router's history module to replace the url
	history.replace(appState?.returnTo || window.location.pathname);
};

function App() {
	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={`${window.location.origin}/notes`}
			onRedirectCallback={onRedirectCallback}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Login} />
					<ProtectedRoute exact path="/note" component={CreateNote} />
					<ProtectedRoute exact path="/notes" component={DisplayNotes} />
					<Route path="*"
						component={PageNotFound}
					/>
				</Switch>
			</Router>
		</Auth0Provider>
	);
}

export default App;
