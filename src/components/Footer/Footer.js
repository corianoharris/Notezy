import React from 'react';
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<div
				className="footer text-dark mt-2">
			<h6>authored by{' '}<span><a className='footer-link badge badge-light' href='https://www.corianoharris.com'>Coriano Harris</a></span></h6>
			</div>
		</>
	);
};

export default Footer;
