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

router.get('/communes/:district', async (req, res) => {
    const fromFile = []
    fs.createReadStream('./data/places.csv')
        .pipe(csv())
        .on('data', row => {
            fromFile.push({
                voivodeship: row.voivodeship,
                district: row.district,
                commune: row.commune
            })
        })
        .on('end', () => {
            const hash = fromFile.reduce((p, c) => (p[c.district] ? p[c.district].push(c) : p[c.district] = [c], p), {})
            const newData = Object.keys(hash).map(k => ({ district: k, communes: hash[k] }));
            const onlyCommunes = newData.map(x => {
                return { district: x.district, communes: x.communes.map(y => y.commune) }
            })
            const founded = onlyCommunes.find(z => z.district === req.params.district)
            res.json({ communes: founded.communes })
        });
});

module.exports = router;
