import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
import '../index.css';

const Spinner = () => {
	return (
		<div className="container mt-5 mx-auto spinner text-center">
			<ImSpinner9 size={70} />
		</div>
	);
};

export default Spinner;
