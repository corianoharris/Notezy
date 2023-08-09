import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useAuth0 } from '@auth0/auth0-react';
import "./DisplayNotes.css";

// components
import EditNote from '../EditNote';
import ViewNote from '../ViewNote';
import Navigation from '../Navigation';
import SkeletonNotesLoader from '../SkeletonNotesLoader/SkeletonNotesLoader';
import NoNotes from '../NoNotes';
import DeleteNote from '../DeleteNote';
import Footer from '../Footer';
import FooterNotFixed from '../FooterNotFixed';

const DisplayNotes = () => {
	const { user } = useAuth0();
	const [notes, setNotes] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isFixedFooter, setIsFixedFooter] = useState(false);

	// declare the async data fetching function
	const getNotes = async () => {
		const response = await fetch('/api/notes', {
			method: 'GET',
		});
		const jsonData = await response.json();
		const userNotes = () =>
			jsonData.filter((note) => note.email === user.name);
		setNotes(userNotes);
		setLoading(false);
	}

	useEffect(() => {
		getNotes()
			.catch(console.error);
		
			if (notes.length < 3) {
				setIsFixedFooter(true);
			} else setIsFixedFooter(false);
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [notes]);

	if (isLoading) {
		return <SkeletonNotesLoader />;
	}

	if (!notes || notes.length === 0) {
		return <NoNotes />;
	}

	return (
		<>
			<Navigation />
			{notes.length === 1 && (
					<h2 className='header text-center m-4'><span>{`You have `}</span><span className='notes-count text-center badge rounded-pill'>{notes.length}</span><span>{` note...` }</span></h2>
				)}
				{notes.length > 1 && (
				<h2 className='header text-center m-4'><span>{`You have `}</span><span className='notes-count text-center badge rounded-pill'>{notes.length}</span><span>{` notes...` }</span></h2>
				)}
			<div className="notes-container p-1">
				{notes.map((note) => (<div className='note-card text-left p-2' key={note.id}>
					<p className='note-card-title text-capitalize text-white shadow-2-strong'>{note.title}</p>
					<p className='note-card-status-dates text-lowercase'>{`date created: ${moment(note.created_date).format('MM-DD-YYYY')}`}</p>
					{note.modified_date !== note.created_date &&
						<p className='note-card-status-dates note-card-status-dates-modified text-lowercase'>{`last modified: ${moment(note.modified_date).format('MM-DD-YYYY h:mm a')} `}</p>
					}
					<div className='note-card-actions'>
						<div className='note-card-view-edit-action'>
							<ViewNote note={note} />
							<EditNote note={note} />
						</div>
						<DeleteNote note={note} />
					</div>
				</div>
				))}
			</div>
			{ isFixedFooter ?  <Footer /> : <FooterNotFixed /> }
		</>
	);
};

export default DisplayNotes;
