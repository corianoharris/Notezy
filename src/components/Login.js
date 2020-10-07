import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div
				className=" container text-center shadow p-3 mx-auto rounded login"
				style={{
					backgroundColor: '#343b3f',
					width: '300px',
					color: '#fff',
				}}>
				<span className="icon" role="img" aria-label="note emoji">
					&#128221;
				</span>
				<h1>Note Collector</h1>
				<button
					className="btn btn-outline-primary"
					onClick={() => loginWithRedirect()}>
					Log In
				</button>
			</div>
		</>
	);
};
export default Login;
