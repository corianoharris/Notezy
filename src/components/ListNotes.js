import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../App.css';
import '../index.css';

// components
import EditNote from './EditNote';
import ViewNote from './ViewNote';
import Navigation from './Navigation';
import Spinner from './Spinner';

const ListNotes = (note) => {
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
	}, []);

	const getNotes = async () => {
		try {
			const response = await fetch('/api/notes');
			const jsonData = await response.json();
			console.log(jsonData);
			setNotes(jsonData);
			setLoading(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<Navigation />
			<div className="table-notes w-100">
				<table className="table table-responsive table-hover w-75 m-5 mx-auto shadow rounded note-table">
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
								<td className="w-50 note-title">
									<p className="content-row">{note.title}</p>
								</td>
								<td className="w-50 first-letter">
									<p className="content-row note-content">
										{note.content}
									</p>
								</td>
								<td className="w-auto">
									<p className="content-row w-auto note-date">
										{moment(note.created_at).format('MM-DD-YYYY')}
									</p>
								</td>
								<td>
									<ViewNote className="w-auto" note={note} />
								</td>
								<td>
									<EditNote className="w-auto" note={note} />
								</td>
								<td>
									<button
										className="btn btn-outline-danger text-uppercase w-auto"
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
