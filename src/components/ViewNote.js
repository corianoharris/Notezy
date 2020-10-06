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
						<div className="modal-header bg-dark text-white">
							<h4 className="modal-title text-warning">View Note</h4>
							<button
								type="button"
								className="close text-uppercase text-white"
								data-dismiss="modal">
								&times;
							</button>
						</div>
						<div>
							<div className=" modal-body bg-dark text-white ">
								<label className="text-left" htmlFor="view-title">
									Title:
								</label>
								<p
									type="text"
									className="bg-dark text-warning "
									id={`#view${note.id}`}
									name="view-title">
									{title}
								</p>
							</div>

							<div className=" modal-body bg-dark text-white ">
								<label className="text-left" htmlFor="view-note">
									Note:
								</label>
								<p
									type="text"
									className="bg-dark text-warning"
									id={`#content${note.id}`}
									name="view-note">
									{content}
								</p>
							</div>
						</div>
						<div className="modal-footer bg-dark text-white">
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
