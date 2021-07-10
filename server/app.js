const express = require('express');
const app = express();

app.use((req, res, _next) => {
    res.status(200).json({
        message: 'App is working'
    });
});

module.exports = app;