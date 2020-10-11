import React from 'react';

const NoNotes = () => {
	return (
		<>
			<h2 className="container w-100 mt-5 mx-auto text-center">
				You currently don't have any notes. Please got to{' '}
				<a href="./note">Note</a> to create a note.
			</h2>
		</>
	);
};

export default NoNotes;
