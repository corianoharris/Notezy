// import React from 'react';
import fetch from 'cross-fetch';

class ApiTest {
	api() {
		return fetch('https://notezyapp.netlify.app/api/notes').then(
			(res) => {
				let jsonData = res.json();
				console.log(jsonData);
			}
		);
	}
}

export default ApiTest;
