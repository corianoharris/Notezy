import React, { Fragment, useState } from 'react';
import '../App.css';
import '../index.css';

const ViewNote = ({ note, id }) => {
	const [title] = useState(note.title);
	const [content] = useState(note.content);
	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-outline-info text-uppercase ml-1 mr-1"
				data-toggle="modal"
				data-target={`#view${note.id}`}>
				View
			</button>
			<div className="modal" id={`view${note.id}`}>
				<div className="modal-dialog ">
					<div className="modal-content">
						<div className="modal-header edit-note text-white">
							<h4 className="modal-title h3 text-white">View Note</h4>
							<button
								type="button"
								className="close text-uppercase text-white"
								data-dismiss="modal">
								&times;
							</button>
						</div>
						<div>
							<div className=" modal-body">
								<label
									className="text-left h3 edit-title"
									htmlFor="view-title">
									Title:
								</label>
								<p
									type="text"
									className="view-note "
									id={`#view${note.id}`}
									name="view-title">
									{title}
								</p>
							</div>

							<div className=" modal-body">
								<label
									className="text-left  h3 edit-title"
									htmlFor="view-note">
									Note:
								</label>
								<p
									type="text"
									className="text view-note "
									id={`#content${note.id}`}
									name="view-note">
									{content}
								</p>
							</div>
						</div>
						<div className="modal-footer text">
							<button
								type="button"
								className="btn btn-outline-danger"
								data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ViewNote;
