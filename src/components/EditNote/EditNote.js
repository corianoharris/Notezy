import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import './EditNote.css';

const EditNote = ({ note }) => {
	const [title, setTitle] = useState(note?.title);
	const [content, setContent] = useState(note?.content);
	const [modifiedAt, setModifiedAt] = useState(null);


	//edit description function
	const updateNote = async (e, id, fields) => {
		setModifiedAt(new Date());
		e.preventDefault();
		try {
			const body = {
				title,
				content,
				modified_at: modifiedAt,
			};

			const response = await fetch(`/api/notes/${note?.id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			if (response) {
				console.log("success")
			} else console.log("error")
			window.location = '/notes'; // make a api call
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-outline-secondary text-uppercase ml-1 mr-1"
				data-toggle="modal"
				data-target={`#edit-${note?.id}`}>
				Edit
			</button>
			<div className="modal bg-dark fade" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id={`edit-${note?.id}`}>
				<div className="modal-dialog">
					<div className="modal-content text-dark">
						<div className="modal-header bg-dark text-white">
							<h4 className="modal-title text-light">Edit Note</h4>
							<button
								type="button"
								className="close text-uppercase text-white"
								data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body text-white">
						<div>
								<label
									className="text-left text-dark bg-light edit-title"
									htmlFor="title">
									Title:
								</label>
								<input
									type="text"
									className="form-control text input-field"
									id={`#edit-title${note?.id}`}
									name="title"
									tabIndex="0"
									maxLength={60}
									value={DOMPurify.sanitize(title)}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>
							</div>
						<div className="modal-body text-white view-textarea">
						<div>
								<label
									className="text-left text-dark edit-title"
									htmlFor="note">
									Note:
								</label>
								<textarea
									type="text"
									className="form-control bg-light edit text input-field"
									id={`#edit-content${note?.id}`}
									name="note"
									tabIndex="0"
									value={DOMPurify.sanitize(content)}
									onChange={(e) =>
										setContent(e.target.value)
									}
									></textarea>
							</div>
							</div>
						<div className="modal-footer modal-edit-actions">
							<button
								type="button"
								className="btn btn-outline-secondary text-uppercase"
								data-dismiss="modal"
								onClick={(e) => updateNote(e)}
								>
								Update
							</button>
							<button
								type="button"
								className="btn btn-outline-dark text-uppercase"
								data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
				</div>
		</>
	);
};

export default EditNote;
