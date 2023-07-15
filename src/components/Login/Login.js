import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div
				className="text-center p-5 mx-auto border-0 login"
				>
				<h1
					className="app-title"
					style={{
						fontFamily:'Permanent Marker',
						fontSize: '80px',
						letterSpacing: '20px',
					}}>
					Notezy
				</h1>
				<button
					className="btn btn-outline-dark btn-lg"
					style={{
						textTransform: 'uppercase',
					}}
					onClick={() => loginWithRedirect()}>
					Enter
				</button>
			</div>
		</>
	);
};
export default Login;
