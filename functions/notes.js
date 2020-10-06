const formattedReturn = require('./helpers/formattedReturn');
const getNotes = require('./helpers/getNotes');
const createNote = require('./helpers/createNote');
const deleteNote = require('./helpers/deleteNote');
const updateNote = require('./helpers/updateNote');
exports.handler = async (event) => {
	if (event.httpMethod === 'GET') {
		return await getNotes(event);
	} else if (event.httpMethod === 'POST') {
		return await createNote(event);
	} else if (event.httpMethod === 'PUT') {
		return await updateNote(event);
	} else if (event.httpMethod === 'DELETE') {
		return await deleteNote(event);
	} else {
		return formattedReturn(405, {});
	}
};
