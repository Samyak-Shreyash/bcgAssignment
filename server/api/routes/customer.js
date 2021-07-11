const express = require('express');
const customer = express.Router();
const Policies = require('../models/policy');

customer.get('/:custID', (req, res, _next) => {
    const id = req.params.custID.toString();
    console.log(id)
    Policies.findOne({ "Customer_id": id })
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).send(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err })
        })
});

module.exports = customer;