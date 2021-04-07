const express = require('express');
const router = express.Router();
const Poll = require('../models/poll');

router.get('/', async (req, res) => {
    res.send("Hello World!")
});

module.exports = router;