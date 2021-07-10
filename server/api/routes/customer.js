const express = require('express');
const customer = express.Router();

customer.get('/:custID', (req, res, _next) => {
    const id = req.params.custID;
    res.status(200).send({
        message: 'You are searching for this Customer',
        id: id
    });
});
module.exports = customer;