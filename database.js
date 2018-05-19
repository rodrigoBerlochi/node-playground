require('dotenv').config();
// couchDB has an http architecture
// it makes http requests to perform any action over the DB
// it doesn't open a connection that should be closed
// but a http request to this url:
const dbUrl = process.env.dbURL;
const dbName = 'geo_db';

// import nano which is the library over couchDB
// and tell it the db url
const nano = require('nano')(dbUrl);
// TODO change it, we don't want to bound here to an specific database,
// except we're sure we will use only one
module.exports = nano.use(dbName);

