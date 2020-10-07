import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div className=" container text-center shadow p-3 mx-auto rounded w-25 login">
				<h1>Notsy</h1>
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
