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
					className="m-3 rounded-circle profile-image bg-dark"
					src={user.picture}
					alt={user.name}
				/>
				<div className="intro mt-5 mb-5">
					<div className="profile-text">
						<h2 className="profile-welcome">Welcome,</h2>
						<h2 className="text-dark profile-user">{user.name}</h2>
					</div>
				</div>
			</div>
		)
	);
};

export default Profile;
