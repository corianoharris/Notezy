import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './UserGreeting.css';

const UserGreeting = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className="Loader">
				Loading your greeting...
			</div>
		);
	}

	return (
		<>
			{isAuthenticated && (
				<div className=" mt-3 d-flex align-items-center">
					<div className="intro">
						<img
					className="profile-user profile-image"
					src={user.picture}
					alt={user.name}
				/>
					</div>
				</div>
			)}
			</>
	);
};

export default UserGreeting;
