const express = require('express');
const app = express();
const { urlencoded, json } = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


//TODO:Add Routes
const policyRoute = require('./api/routes/policy');
const customerRoute = require('./api/routes/customer');
const regionRoute = require('./api/routes/region');

//TODO: Add Mongoose Connection
//TODO: Add try-catch Block
mongoose.connect('mongodb+srv://baseUser:' + process.env.MONGO_ATLAS_PW + '@bcgproject.27zza.mongodb.net/insurance', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());


//TODO: Add CORS path
app.use((req, res, _next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET,PATCH");
        return res.status(200).send({});
    }
    _next();
});


//TODO: Use Routes
app.use('/policy', policyRoute);
app.use('/customer', customerRoute);
app.use('/region', regionRoute);

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

//TODO: Add middleware for requests
module.exports = app;