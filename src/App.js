import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import CreateNote from './components/CreateNote';
import ListNotes from './components/ListNotes';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={CreateNote} />
				<Route exact path="/notes" component={ListNotes} />
				<Route
					render={() => (
						<h1 className="container w-100 mt-5 mx-auto text-center">
							404: page not found
						</h1>
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;
