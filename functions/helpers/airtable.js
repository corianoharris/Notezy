require('dotenv').config();
var Airtable = require('airtable');

// deploy env
// const { secret, baseId, db_name } = process.env;
// var base = new Airtable({ apiKey: secret }).base(baseId);
// const table = base(db_name);

// local env
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
);
const table = base(process.env.AIRTABLE_TABLE_NAME);

console.log(table);

module.exports = { table };
