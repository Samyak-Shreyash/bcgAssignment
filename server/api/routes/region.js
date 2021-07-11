const express = require('express');
const region = express.Router();
const Policies = require('../models/policy');
const RegionData = require('../regionalData');

region.get('/:region', (req, res, _next) => {
    const reg = req.params.region.toString();
    console.log(reg)
    Policies.find({ "Customer_Region": reg })
        .exec()
        .then(doc => {
            res.status(200).send(RegionData(doc));
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err })
        })
});

module.exports = region;