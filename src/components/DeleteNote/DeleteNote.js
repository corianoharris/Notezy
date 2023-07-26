import React from 'react';
import './DeleteNote.css';

const DeleteNote = ({ note }) => {

	const deleteNote = async (id) => {
		try {
			const deleteNote = await fetch('/api/notes', {
				method: 'DELETE',
				body: JSON.stringify({ id }),
			});
			if (deleteNote) {
				console.log("deleted note")
				window.location = '/yournotes';
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-outline-danger button-delete"
				data-toggle="modal"
				data-target={`#delete-${note.id}`}>
			Delete
			</button>
			<div className="modal bg-dark fade" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id={`delete-${note.id}`}>
				<div className="modal-dialog">
					<div className="modal-content text-dark">
						<div className="modal-header bg-secondary text-uppercase text-white">
							<h4 className="modal-title text-light">Delete Note</h4>
							<button
								type="button"
								className="close text-uppercase text-white"
								data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body text-black">
						<p>Are you sure you want to delete this note?</p>
							</div>
						<div className="modal-footer modal-edit-actions">
							<button
								type="button"
								className="btn btn-outline-secondary text-uppercase"
								data-dismiss="modal"
								>
								No
							</button>
							<button
								type="button"
								className="btn btn-outline-dark text-uppercase"
								data-dismiss="modal"
								onClick={(e) => deleteNote(note.id)}>
								Yes
							</button>
						</div>
					</div>
				</div>
				</div>
		</>
	);
};

export default DeleteNote;
