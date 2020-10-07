import React from 'react';
import '../index.css';

const Navigation = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<a href={'/'} className="nav-link">
							Note
						</a>
					</li>
					<li className="navbar-item">
						<a href={'/notes'} className="nav-link">
							Collections
						</a>
					</li>
				</ul>
			</div>
			<LogoutButton />
		</nav>
	);
};

export default Navigation;
