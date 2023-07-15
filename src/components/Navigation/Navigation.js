import React from 'react';
import LogoutButton from '../LogoutButton';
import './Navigation.css';
import UserGreeting from '../UserGreeting';

const  Navigation = () => {
	return (
		<>
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom-3 shadow ">
			<a
				href={'/'}
				className="navbar-brand links"
				style={{
					fontFamily: 'Permanent Marker',
					fontSize: '36px',
					color: 'white'
				}}>
				Notezy
			</a>
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<a
							href={'/note'}
							className="nav-link active links badge badge-light text-dark p-1"
					>
							Create a note
						</a>
					</li>
					<li className="navbar-item">
						<a
							href={'/notes'}
							className="nav-link links badge badge-light text-dark p-1"
						>
							Your Notes
						</a>
					</li>
				</ul>
			</div>
			<div className='greeting-container'>
				<UserGreeting />
				<LogoutButton />
				</div>
			</nav>
		</>
	);
};

export default Navigation;
