import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import '../index.css';

const Spinner = () => {
	return (
		<div className="container mt-5 mx-auto spinner text-center">
			<FaSpinner size={70} />
		</div>
	);
};

export default Spinner;
