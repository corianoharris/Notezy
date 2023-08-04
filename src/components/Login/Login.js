import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div
				className="text-center border-0 login"
				>
				<h1
					className="login-header"
				>Notezy
				</h1>
				<button
					className="btn btn-lg"
					onClick={() => loginWithRedirect()}>
					Enter
				</button>
			</div>
		</>
	);
};
export default Login;
