const ronin = require('ronin-server');
const mocks = require('ronin-mocks');
const db = require('ronin-database');

const server = ronin.server();

db.connect(process.env.CONNECTION_STRING);
server.use('/', mocks.server(server.Router(), false, false));
server.start();
