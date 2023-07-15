import React from 'react';
import  Navigation from '../src/components/ Navigation';
import LogoutButton from '../src/components/LogoutButton';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// react test renderer to test ui
it('renders correctly', () => {
	const nav = renderer.create(< Navigation />).toJSON();
	const logout = renderer.create(<LogoutButton />).toJSON();
	expect(nav).toMatchSnapshot();
	expect(logout).toMatchSnapshot();
});

// testing-library/react ti test nav links
test('renders collectins link', () => {
	const { getByText } = render(< Navigation />);
	const linkElement = getByText(
		/Create a note/i,
		/Your notes/i
	);
	expect(linkElement).toBeInTheDocument();
});
