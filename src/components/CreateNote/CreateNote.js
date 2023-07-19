import React, { useState } from 'react';
import "./CreateNote.css";
import DOMPurify from 'dompurify';
import { useAuth0 } from '@auth0/auth0-react';

// components
import  Navigation from '../Navigation';
import Footer from '../Footer';

const CreateNote = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { user } = useAuth0();
	const [email] = useState(user.name);

	const addNote = async (e) => {
		e.preventDefault();
		try {
			const body = {
				email,
				title,
				content,
			};
			const response = await fetch('/api/notes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			if (response) {
				console.log("success")
				window.location = '/yournotes';
			} else console.log("error")
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			< Navigation />

			<h2 className='text-center text-dark m-4'>Let's create a note...</h2>
			<div
				className="text-white container rounded shadow bg-dark mt-4">
				<form className="mt-5 was-validated" onSubmit={addNote}>
					<label className="h3 text-white mt-2" htmlFor="note-title">
						Title
					</label>
					<input
						type="text"
						className="form-control p-3 first-letter border border-light input"
						id="note-title"
						placeholder="add title..."
						name="note"
						value={DOMPurify.sanitize(title)}
						onChange={(e) => setTitle(e.target.value)}
						maxLength={60}
						required
					/>
					<div className="valid-feedback mt-2 mb-2 fw-semibold">Thank you.</div>
					<div className="invalid-feedback mt-2 mb-2 text-white fw-semibold">
						Required field. Max characters is 60. 
					</div>
					<label className="h3 text-white mt-1" htmlFor="note-content">
						Note
					</label>
					<textarea
						type="text"
						className="form-control p-3 bg-white dark first-letter border border-light input"
						id="note-content"
						placeholder="add note..."
						name="note-content"
						value={DOMPurify.sanitize(content)}
						onChange={(e) => setContent(e.target.value)}
						required></textarea>
					<div className="valid-feedback mt-2 mb-2 fw-semibold">Thank you.</div>
					<div className="invalid-feedback mt-2 mb-2 text-white fw-semibold">
						Required field.
					</div>
					<div className="text-right">
						<button className="btn btn-outline-light m-4" onClick={addNote}>Add</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default CreateNote;
