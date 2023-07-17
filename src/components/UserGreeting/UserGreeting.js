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
				<div className="container mt-3 d-flex align-items-center border-bottom">
					<div className="intro mt-2 mb-2">
						<div className="profile-text">
							<h3 className="profile-user text-white">`Hey,${user.name}`</h3>
					</div>
				</div>
			</div>
			)}
			</>
	);
};

export default UserGreeting;
