import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Login from '../src/components/Login';

// test
it('should render the Login component without crashing ', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Login />, div);
});
