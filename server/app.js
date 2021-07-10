const express = require('express');
const app = express();

//TODO:Add Routes
const policyRoute = require('./api/routes/policy');
const customerRoute = require('./api/routes/customer');

//TODO: Use Routes
app.use('/policy', policyRoute);
app.use('/customer', customerRoute);

//TODO: Add CORS path
//TODO: Add middleware for requests
module.exports = app;