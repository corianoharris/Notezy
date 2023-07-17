import React, { useState } from 'react';
import './ViewNote.css';

const ViewNote = ({note}) => {
	const [title] = useState(note?.title);
	const [content] = useState(note?.content);

	return (
		<>
			<button
				type="button"
				className="btn btn-outline-secondary text-uppercase ml-1 mr-1"
				data-toggle="modal"
				data-target=".view-note">
				View
			</button>
			<div className="modal bg-dark fade view-note" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content text-dark">
						<div className="modal-header bg-secondary">
							<h4 className="modal-title">View Note</h4>
							<button
								type="button"
								className="close text-uppercase text-white"
								data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body text-white view-textarea">
							<div>
								<label
									className="text-left text-dark view-title"
									htmlFor="title"
									>
									Title:
								</label>
								<p
									type="text"
									className=" text-left text-dark input-field"
									name="title"
									tabIndex="0">
								{title}
								</p>
							</div>
						</div>
						<div className="modal-body text-white view-textarea">
							<div>
								<label
									className="text-left text-dark"
									htmlFor="note">
									Note:
								</label>
								<p
									type="text"
									className="text text-dark input-field"

									name="note"
									tabIndex="0">
									{content}
								</p>
							</div>
						</div>

						<div className="modal-footer modal-edit-actions">
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

export default ViewNote;
