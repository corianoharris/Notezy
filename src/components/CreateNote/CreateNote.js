import React, { useState, useEffect, useRef } from 'react';
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

	const buttonRef = useRef();

	

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

	useEffect(() => {
		if (title < 1 || content < 1) {
			buttonRef.current.classList.add("is-disabled");
		} else {
			buttonRef.current.classList.remove("is-disabled");
		}
	}, [content, title])
	
	return (
		<>
			< Navigation />

			<h2 className='header text-center m-4'>Let's create a note...</h2>
			<div
				className="text-white container rounded  mt-4">
				<form className="mt-5 was-validated" onSubmit={addNote}>
					<label className="label-title h3 mt-2 form-label  mb-2" htmlFor="note-title">
						Title
					</label>
					<input
						type="text"
						className="form-control is-valid p-3 first-letter border border-light input shadow-lg"
						id="note-title"
						placeholder="add title..."
						name="note"
						value={DOMPurify.sanitize(title)}
						onChange={(e) => setTitle(e.target.value)}
						maxLength={60}
						required
					/>
					<div className="invalid-feedback mt-2 fw-semibold fs-6" id="user-note-title" aria-describedby="user-note-title">
						Required field. Max characters is 60. 
					</div>
					<label className="label-title h3 mt-3 form-label" htmlFor="note-content">
						Note
					</label>
					<textarea
						type="text"
						className="form-control is-valid p-3 bg-white dark first-letter border border-light input shadow-lg"
						id="note-content"
						placeholder="add note..."
						name="note-content"
						value={DOMPurify.sanitize(content)}
						onChange={(e) => setContent(e.target.value)}
						required></textarea>
					<div className="invalid-feedback mt-2 mb-2 fw-semibold fs-6" id="user-note-content" aria-describedby="user-note-content">
						Required field.
					</div>
					<div className="text-right">
						<button ref={ buttonRef } className="btn btn-outline-light mt-4 mb-2 add-note-btn is-disabled" id="add-btn" onClick={addNote}>Add</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default CreateNote;
