const express = require('express');
const policy = express.Router();
const Policies = require('../models/policy');


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
    Policies.findOne({ "Policy_id": id })
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
policy.patch('/:policyID', (req, res, _next) => {
    const id = req.params.policyID;
    const pol = { 'premium': req.body.premium };

    res.status(200).send({
        message: 'You are updating for this ID',
        id: id,
        'policy': pol
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