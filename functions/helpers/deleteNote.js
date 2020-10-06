const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
	const { id } = JSON.parse(event.body);
	try {
		const deletedNote = await table.destroy(id);
		return formattedReturn(200, deletedNote);
	} catch (err) {
		console.error(err);
		return formattedReturn(500, {});
	}
};
