const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    res.send("Hello World!")
});

router.post('/register', async (req, res) => {
    const new_user = new User({
        ...req.body
    });

    new_user.save()
        .then((user) => {
            res.json({
                user: user,
                success: true
            });
        })
        .catch((error) => {
            console.log(console.log(error))
            res.status(404).json({
                success: false
            });
        });
});

module.exports = router;
