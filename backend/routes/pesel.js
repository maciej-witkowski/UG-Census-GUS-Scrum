const express = require('express');
const router = express.Router();

router.post('/is_valid', async (req, res) => {
    const pesel = req.body.pesel;

    if (typeof pesel !== 'string') res.json({ success: false })

    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const controlNumber = parseInt(pesel.substring(10, 11));
    let sum = 0;

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
    }

    sum = sum % 10;

    if ((10 - sum) % 10 === controlNumber) {
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
});

module.exports = router;
