import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';

import {
	Auth0Provider,
	withAuthenticationRequired,
} from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';

import CreateNote from './components/CreateNote';
import ListNotes from './components/ListNotes';
import Login from './components/Login';
import Spinner from './components/Spinner';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// history
const history = createBrowserHistory();

// protected route
const ProtectedRoute = ({ component, ...args }) => (
	<Route
		component={withAuthenticationRequired(component, {
			onRedirecting: () => <Spinner />,
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
			redirectUri={`${window.location.origin}/note`}
			onRedirectCallback={onRedirectCallback}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Login} />
					<ProtectedRoute exact path="/note" component={CreateNote} />
					<ProtectedRoute exact path="/notes" component={ListNotes} />
					<Route
						render={() => (
							<h1 className="container w-100 mt-5 mx-auto text-center">
								404: page not found
							</h1>
						)}
					/>
				</Switch>
			</Router>
		</Auth0Provider>
	);
}

export default App;
