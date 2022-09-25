const express = require('express');
const router = express.Router();
const Model = require('../models/subscriberModel');


router.post('/add', (req, res) => {
    console.log(req.body);
    
    // asynchronous functions
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    
})

module.exports = router;