import React from 'react';
import "./SkeletonNotesLoader.css";

// components
// import Navigation from '../Navigation';
import Footer from '../Footer';

const SkeletonNotesLoader = () => {

	return (
		<>
			{/* < Navigation /> */}
			<div className='skeleton-loader'>
				<div className=' skeleton skeleton-loader-header'></div>
				<div className="skeleton-loader-content-container">
					<div className='skeleton skeleton-text'>
					</div>
					<div className='skeleton skeleton-text'>
					</div>
					<div className='skeleton skeleton-text'>
					</div>
					<div className='skeleton skeleton-text'>
					</div>
					<div className='skeleton skeleton-text'>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SkeletonNotesLoader;
