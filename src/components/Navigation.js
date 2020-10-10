import React from 'react';
import LogoutButton from './LogoutButton';
import '../index.css';

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg border-bottom-3 shadow">
			<a
				href={'/'}
				className="navbar-brand links"
				style={{
					fontFamily: 'Permanent Marker',
					color: '#800000',
				}}>
				Note Collector
			</a>
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<a
							href={'/note'}
							className="nav-link active links"
							style={{
								color: '#800000',
							}}>
							Note
						</a>
					</li>
					<li className="navbar-item">
						<a
							href={'/notes'}
							className="nav-link links"
							style={{
								color: '#800000',
							}}>
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
