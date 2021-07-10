// TODO: Add mandatory imports
const http = require('http');
const app = require('./app');
//TODO: Add interface to get PORT from env 
const port = process.env.PORT || 3000;

//TODO: Create Server 
const server = http.createServer(app);

//TODO: Listen to port specified
server.listen(port);