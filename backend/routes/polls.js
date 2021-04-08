const express = require('express');
const router = express.Router();
const Poll = require('../Models/Poll');

router.get('/', async (req, res) => {
    Poll.find()
        .then((polls) => {
            res.json(polls)
        })
        .catch((error) => {
            console.log(console.log(error))
            res.status(404).json({
                success: false
            });
        })
});

router.post('/', async (req, res) => {
    const new_poll = new Poll({
        ...req.body
    });

    new_poll.save()
        .then((poll) => {
            res.json({
                poll: poll,
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

router.patch('/patch', async (req, res) => {
    const pesel = req.body.pesel;

    const foundPollWithUsersPESEL = await Poll.findOne({ pesel: pesel });

    if (foundPollWithUsersPESEL) {
        const newPoll = await Poll.findOneAndUpdate({ pesel: pesel }, { ...req.body }, { new: true });
        if (newPoll) {
            res.json({
                poll: newPoll
            });
        } else {
            res.json({
                poll: newPoll
            });
        }
    } else {
        res.json({
            poll: {}
        });
    }
});

module.exports = router;