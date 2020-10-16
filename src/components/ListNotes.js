import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';
import '../index.css';

// components
import EditNote from './EditNote';
import ViewNote from './ViewNote';
import Navigation from './Navigation';
import Spinner from './Spinner';
import NoNotes from './NoNotes';

const ListNotes = (note) => {
	const { user } = useAuth0();
	const [notes, setNotes] = useState([]);
	const [isLoading, setLoading] = useState(true);

	//delete report function

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
		return <Spinner />;
	}

	if (!notes || notes.length === 0) {
		return <NoNotes />;
	}

	return (
		<>
			<Navigation />
			<div className="table-notes w-100">
				<table className="table table-responsive w-75  px-auto mt-5 mb-5 mr-1 ml-1 mx-auto shadow rounded note-table">
					<thead className="text-uppercase th.sm th text-light">
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Note</th>
							<th scope="col">Created At</th>
							<th scope="col">View</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody className="">
						{notes.map((note) => (
							<tr key={note.id}>
								<td className="w-25 table-note-title">
									<p className="align-middle content-row">
										{note.title}
									</p>
								</td>
								<td className="w-50 first-letter">
									<p className=" align-middle content-row">
										{note.content}
									</p>
								</td>
								<td className="w-auto">
									<p className=" content-row align-middle note-date">
										{moment(note.created_at).format('MM-DD-YYYY')}
									</p>
								</td>
								<td>
									<ViewNote
										className="w-auto align-middle "
										note={note}
									/>
								</td>
								<td>
									<EditNote
										className="w-auto align-middle "
										note={note}
									/>
								</td>
								<td>
									<button
										className="btn btn-outline-danger text-uppercase w-auto align-middle "
										onClick={() => deleteNote(note.id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ListNotes;
