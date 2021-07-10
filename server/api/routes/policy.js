const express = require('express');
const policy = express.Router();

policy.get('/', (req, res, _next) => {
    res.status(200).send({
        message: 'Handling Get Request'
    });
});

policy.post('/', (req, res, _next) => {
    res.status(200).send({
        message: 'Handling POST Request'
    });
});

policy.get('/:policyID', (req, res, _next) => {
    const id = req.params.policyID;
    res.status(200).send({
        message: 'You are searching for this ID',
        id: id
    });
});
policy.patch('/:policyID', (req, res, _next) => {
    const id = req.params.policyID;
    res.status(200).send({
        message: 'You are updating for this ID',
        id: id
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