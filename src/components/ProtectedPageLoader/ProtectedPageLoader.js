import React from 'react';
import Footer from '../Footer';

const ProtectedPageLoader = () => {
	return (
		<>
			<div className='text-center p-5 mx-auto border-0 login'>
				<h2 className="container w-100 mt-5 mx-auto text-center ">
					Getting your page...
				</h2>
			</div>
			<Footer />
		</>
	);
};

export default ProtectedPageLoader;