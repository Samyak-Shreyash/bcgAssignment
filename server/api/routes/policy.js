const express = require('express');
const policy = express.Router();
const Policies = require('../models/policy');
const parseData = require('../parseData');


policy.get('/', (req, res, _next) => {
    Policies.find()
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

policy.get('/:policyID', (req, res, _next) => {
    const id = req.params.policyID.toString();
    console.log(id)
    Policies.findById({ "_id": id })
        .exec()
        .then(doc => {
            res.status(200).send(parseData(doc));
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err })
        })
});
policy.patch('/:policyID', (req, res, _next) => {
    const id = req.params.policyID;
    const updateFields = {};
    for (const fields of req.body) {
        updateFields[fields.propName] = fields.value
    }
    Policies.findByIdAndUpdate({ _id: id }, { $set: updateFields })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send({ error: err })
        });

});

policy.delete('/:policyID', (req, res, _next) => {
    const id = req.params.policyID;
    res.status(200).send({
        message: 'You are deleting for this ID',
        id: id
    });
});


module.exports = policy;