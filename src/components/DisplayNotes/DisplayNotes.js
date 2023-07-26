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
import Footer from '../Footer';

const DisplayNotes = () => {
	const { user } = useAuth0();
	const [notes, setNotes] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const deleteNote = async (id) => {
		try {
			const deleteNote = await fetch('/api/notes', {
				method: 'DELETE',
				body: JSON.stringify({ id }),
			});
			if (deleteNote) {
				console.log("deleted note")
			}
			setNotes(notes.filter((note) => note.id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};

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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <SkeletonNotesLoader />;
	}

	if (!notes || notes.length === 0) {
		return <NoNotes />;
	}

	if (notes.length < 0) {
		
	}

	return (
		<>
			<Navigation />
				{notes.length === 1 && (
					<h2 className='text-center text-dark m-4'>{`You have ${notes.length} note`}</h2>
				)}
				{notes.length > 1 && (
					<h2 className='text-center text-dark m-4'>{`You have ${notes.length} notes`}</h2>
				)}
			<div className="notes-container p-1">
				{notes.map((note) => (<div className='note-card text-left p-2 shadow-2-strong' key={note.id}>
					<p className='note-card-title text-capitalize'>{note.title}</p>
					<p className='note-card-status-dates text-lowercase'>{`date created: ${moment(note.created_date).format('MM-DD-YYYY')}`}</p>
					{note.modified_date !== note.created_date &&
						<p className='note-card-status-dates note-card-status-dates-modified text-lowercase'>{`last modified: ${moment(note.modified_date).format('MM-DD-YYYY h:mm a')} `}</p>
					}
					<div className='note-card-actions'>
						<div className='note-card-view-edit-action'>
							<ViewNote note={note} />
							<EditNote note={note} />
						</div>
						<button className='btn btn-outline-danger button-delete' onClick={() => deleteNote(note.id)}>Delete</button>
					</div>
				</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default DisplayNotes;
