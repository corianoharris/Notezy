import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css';
import womanNoteImg from '../assets/woman_note.jpeg';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<div
				className="text-center shadow p-5 mx-auto rounded border-0 border-dark login"
				style={{
					backgroundImage: `url(${womanNoteImg})`,
					backgroundSize: 'cover',
					color: '#fff',
				}}>
				<span className="icon" role="img" aria-label="note emoji">
					&#9776;
				</span>
				<h1
					className="app-title"
					style={{
						fontFamily: 'Permanent Marker',
					}}>
					Note Collector
				</h1>
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
