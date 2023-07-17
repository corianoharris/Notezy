import React from 'react';
import Footer from '../Footer';
import './NoNotes.css';

const NoNotes = () => {
	return (
		<>
			<div className='text-center p-5 mx-auto border-0 login'>

			
				<h2 className="container w-100 mt-5 mx-auto text-center">
				You currently don't have any notes. Let's create a {' '}
				<a className="no-note-link text-dark" href="./note">
					Note
				</a>
				</h2>
			</div>
			<Footer />
		</>
	);
};

export default NoNotes;
