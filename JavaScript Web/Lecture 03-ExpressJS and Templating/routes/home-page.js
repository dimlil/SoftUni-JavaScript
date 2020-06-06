const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.send('Welcome to our application');
    })
    .post('/', (req, res) => {
        res.send([1,2,3])
    })

module.exports = router;