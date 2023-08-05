import React from 'react';
import "./FooterNotFixed.css";

const FooterNotFixed = () => {
	return (
		<>
			<div
				className="footer-not-fixed text-dark mt-2 p-10 bg-white">
			<h6>authored by{' '}<span><a className="footer-link" href='https://www.corianoharris.com' rel="noreferrer" >Coriano Harris</a></span></h6>
			</div>
		</>
	);
};

export default FooterNotFixed;
