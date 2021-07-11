const express = require('express');
const app = express();
const morgan = require('morgan');

//TODO:Add Routes
const policyRoute = require('./api/routes/policy');
const customerRoute = require('./api/routes/customer');

app.use(morgan('dev'));

//TODO: Use Routes
app.use('/policy', policyRoute);
app.use('/customer', customerRoute);

app.use((req, res, _next) => {
    const error = new Error('Not Found');
    error.status = 404;
    _next(error);
})

app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    res.send({
        error: {
            message: error.message
        }
    })
});

//TODO: Add CORS path
//TODO: Add middleware for requests
module.exports = app;