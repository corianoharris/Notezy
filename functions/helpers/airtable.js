require('dotenv').config();
var Airtable = require('airtable');

const { secret, baseId, db_name } = process.env;
var base = new Airtable({ apiKey: secret }).base(baseId);
const table = base(db_name);

console.log(table);

module.exports = { table };
