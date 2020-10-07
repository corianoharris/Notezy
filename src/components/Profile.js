import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaSpinner } from 'react-icons/fa';
import '../index.css';

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className="spinner">
				<FaSpinner />
			</div>
		);
	}

	return (
		isAuthenticated && (
			<div className="container mt-3 d-flex align-items-center border-bottom">
				<img
					className="m-3 profile-image"
					src={user.picture}
					alt={user.name}
				/>
				<h2 className="profile-text">Welcome, {user.name}</h2>
			</div>
		)
	);
};

export default Profile;
