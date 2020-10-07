import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from './Spinner';

const LogoutButton = () => {
	const { logout, isLoading } = useAuth0();
	if (isLoading) {
		return <Spinner />;
	}

	return (
		<button
			className="btn btn-outline-danger"
			onClick={() => logout({ returnTo: window.location.origin })}>
			Log Out
		</button>
	);
};

export default LogoutButton;
