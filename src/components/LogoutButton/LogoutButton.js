import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./LogoutButton.css";
import Loader from "../Loader";

const LogoutButton = () => {
	const { logout, isLoading } = useAuth0();
	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='logout-button-container'>
		<button
			className="btn btn-outline-light"
			onClick={() => logout({ returnTo: window.location.origin })}>
			Log Out
			</button>
			</div>
	);
};

export default LogoutButton;