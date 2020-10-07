import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../App.css';
import '../index.css';

// components
import EditNote from './EditNote';
import ViewNote from './ViewNote';
import Navigation from './Navigation';

const ListNotes = (note) => {
	const [notes, setNotes] = useState([]);

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
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<Navigation />
			<div className="table-notes">
				<table className="table table-responsive table-striped table-hover table-dark w-75 mx-auto m-5">
					<thead className="text-uppercase">
						<tr>
							<th>Title</th>
							<th>Note</th>
							<th>Created At</th>
							<th>View</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody className="text-warning">
						{notes.map((note) => (
							<tr key={note.id}>
								<td className="w-50 first-letter">
									<p className="content-row">{note.title}</p>
								</td>
								<td className="w-50 first-letter">
									<p className="content-row ">{note.content}</p>
								</td>
								<td className="w-auto first-letter">
									<p className="content-row w-auto">
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
