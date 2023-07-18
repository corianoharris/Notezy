import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useAuth0 } from '@auth0/auth0-react';
import "./DisplayNotes.css";

// components
import EditNote from '../EditNote';
import ViewNote from '../ViewNote';
import  Navigation from '../Navigation';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
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
			console.log(deleteNote);
			setNotes(notes.filter((note) => note.id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getNotes();
	});

	const getNotes = async () => {
		try {
			const response = await fetch('/api/notes', {
				method: 'GET',
			});
			const jsonData = await response.json();
			const email = () =>
				jsonData.filter((note) => note.email === user.name);
			setNotes(email);
			setLoading(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	if (isLoading) {
		return <SkeletonLoader />;
	}

	if (!notes || notes.length === 0) {
		return <NoNotes />;
	}

	return (
		<>
			<Navigation />
			<h2 className='text-center text-dark m-4'>Your notes...</h2>
			 <div className="notes-container p-1">
				{notes.map((note) => (<div className='note-card text-left p-2 shadow-2-strong'key={note.id}>
					<p className='note-card-title text-capitalize'>{note.title}</p>
					<p className='note-card-status-dates text-lowercase'>{`date created: ${moment(note.created_at).format('MM-DD-YYYY')}`}</p>
					<p className='note-card-status-dates text-lowercase'>{`date modifier: ${moment(note.modified_at).format('MM-DD-YYYY')}`}</p>
					<div className='note-card-actions'>
						<div className='note-card-view-edit-action text-uppercase'>
							<ViewNote note={note}/>
							<EditNote note={note}/>
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
