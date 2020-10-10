import React from 'react';
import ApiTest from './Api';

it('api testing of the Note Collector data', async () => {
	const response = new ApiTest();
	console.table(await response.api());

	expect('Coriano').toEqual('Coriano');
});


