import React from 'react';
import LogoutButton from '../LogoutButton';
import './Navigation.css';
import UserGreeting from '../UserGreeting';
import brandLogo from '../../assets/favicon32.png'; // with import

const Navigation = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom-3 shadow ">
			
				<div className="collpase navbar-collapse">
					<ul className="navbar-nav mr-auto mt-2">

					<li className="navbar-item">	
				<div className="brand-link">
					<img className='branding-image' src={brandLogo} alt='notebook icon' /> {' '}

					<a
						href={'/'}
						className="navbar-brand link-underline-light link-underline-opacity-100-hover">
						Notezy
					</a>
							</div>
							</li>	
						<li className="navbar-item">
							<a
								href={'/note'}
								className="nav-link active link-underline-light link-underline-opacity-100-hover"
							> Create a note
							</a>
						</li>
						<li className="navbar-item">
							<a
								href={'/notes'}
								className="nav-link link-underline-light link-underline-opacity-100-hover"
							>
								Your notes
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
