import React from 'react';
import LogoutButton from './LogoutButton';
import '../index.css';

const Navigation = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<span role="img" aria-label="note emoji">
				&#128221;
			</span>
			<a href={'/'} className="navbar-brand">
				Note Collector
			</a>
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<a href={'/note'} className="nav-link">
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
