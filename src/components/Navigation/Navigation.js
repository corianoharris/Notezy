import React from 'react';
import LogoutButton from '../LogoutButton';
import './Navigation.css';

const  Navigation = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom-3 shadow ">
			<a
				href={'/'}
				className="navbar-brand links"
				style={{
					fontFamily: 'Permanent Marker',
					fontSize: '48px',
					color: 'white'
				}}>
				Notezy
			</a>
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<a
							href={'/note'}
							className="nav-link active links"
							style={{
								color: '#d3d3d3d3',
							}}>
							Create a note
						</a>
					</li>
					<li className="navbar-item">
						<a
							href={'/notes'}
							className="nav-link links"
							style={{
								color: '#d3d3d3d3',
							}}>
							Your Notes
						</a>
					</li>
				</ul>
			</div>
			<LogoutButton />
		</nav>
	);
};

export default Navigation;
