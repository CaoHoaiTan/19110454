const express = require('express');
const { mygroup } = require('../models/models.mygroup');
const router = express.Router();
const routeMSSV = require('./19110454');
const messageRouter = require('./message');

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

function route(app) {
    // define the home page route
    app.get('/', (req, res) => {
        res.status(200).json(mygroup);
    });
    // route
    app.use('/19110454', routeMSSV);
    app.use('/message', messageRouter);
}

module.exports = route;