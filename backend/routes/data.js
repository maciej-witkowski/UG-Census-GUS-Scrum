const express = require('express');
const router = express.Router();

const csv = require('csv-parser');
const fs = require('fs');

router.get('/nations', async (req, res) => {
    const fromFile = []
    fs.createReadStream('./data/nations.csv')
        .pipe(csv())
        .on('data', row => fromFile.push(row.country))
        .on('end', () => {
            res.json({ countries: fromFile })
        });
});

module.exports = router;
