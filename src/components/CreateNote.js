import React, { Fragment, useState } from 'react';
import '../App.css';
import '../index.css';

// components
import Navigation from './Navigation';
import Profile from './Profile';

const CreateNote = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const submitNote = async (e) => {
		e.preventDefault();
		try {
			const body = {
				title,
				content,
			};
			const response = await fetch('/api/notes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			console.log('The data', response);
			window.location = '/notes'; // make a api call to db
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<Fragment>
			<Navigation />
			<Profile />
			<div
				className="text-white container w-100 shadow"
				style={{
					backgroundColor: '#343b3f',
					padding: '8px',
				}}>
				<form
					className="mt-5 was-validated bg-dark"
					onSubmit={submitNote}>
					<label className="h3 text-warning" htmlFor="note-title">
						Title
					</label>
					<input
						type="text"
						className="form-control p-3 bg-dark text-warning first-letter border border-light"
						id="note-title"
						placeholder="add title..."
						name="note"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<div className="valid-feedback mt-2 mb-2">Thank you.</div>
					<div className="invalid-feedback mt-2 mb-2">
						Please add a title...
					</div>
					<label className="h3 text-warning" htmlFor="note-content">
						Note
					</label>
					<textarea
						type="text"
						className="form-control p-3 bg-dark text-warning first-letter border border-light"
						id="note-content"
						placeholder="add note..."
						name="note-content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						required></textarea>
					<div className="valid-feedback mt-2 mb-2">Thank you.</div>
					<div className="invalid-feedback mt-2 mb-2">
						Please write a note...
					</div>
					<div className="text-right m-4">
						<button className="btn btn-outline-primary">Add</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default CreateNote;
