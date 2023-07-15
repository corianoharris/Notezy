import React from 'react';
import Footer from '../Footer';

const Loader = () => {
	return (
		<>
			<div className='text-center p-5 mx-auto border-0 login'>
				<h2 className="container w-100 mt-5 mx-auto text-center " style={
					{
						letterSpacing: '6px',
						lineHeight: '50px',
						fontSize: '28px',
					}
				}>
					Loading your notes...
				</h2>
			</div>
			<Footer />
		</>
	);
};

export default Loader;