const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
	const { id, ...fields } = JSON.parse(event.body);
	try {
		const updatedNote = await table.update([{ id, fields }]);
		return formattedReturn(200, updatedNote);
	} catch (err) {
		console.error(err);
		return formattedReturn(500, {});
	}
};
