import React from 'react';
import Navigation from '../src/components/Navigation';
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
test('renders nav links', () => {
	const { getByText } = render(< Navigation />);
	const NotezyLinkText = getByText(
		/Notezy/i,
	);
	const CreateANoteLinkText = getByText(
		/Create a note/i,
	);
	const YourNotesLInkText = getByText(

		/Your notes/i,
	);

	expect(NotezyLinkText).toBeInTheDocument();
	expect(CreateANoteLinkText).toBeInTheDocument();
	expect(YourNotesLInkText).toBeInTheDocument();
});
