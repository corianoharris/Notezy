import React from 'react';
import './PageNotFound.css';
import Footer from '../Footer';

const PageNotFound = () => {
	return (
		<>
			<div className='text-center p-5 mx-auto border-0 login w-100'>

			
				<h2 className="container w-100 mt-5 mx-auto text-center " style={
					{
						letterSpacing: '6px',
						lineHeight: '50px',
						fontSize: '28px',
					}
			}>
				Sorry, page not found. Please try again. 
				</h2>
			</div>
			<Footer />
		</>
	);
};

export default PageNotFound;
