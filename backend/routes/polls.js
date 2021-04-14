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

router.get('/ileankietwyslano', async (req, res) => {
    try {
        const allpolls = await Poll.find()
        const x = Object.keys(allpolls).length
        return res.json(x);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/ilekobiet', async (req, res) => {
    try {
        const allpolls = await Poll.find()
        const x = Object.keys(allpolls).length
        let ilekobiet = 0
        for(let i=0; i < x; i++){
            if (allpolls[i].sex === "Kobieta"){
                ilekobiet=ilekobiet+1}
        }
        return res.json(ilekobiet);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/ilemezczyzn', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilemezczyzn=0
        for(let i=0;i<x;i++){
            if(allpolls[i].sex==="Mężczyzna"){
                ilemezczyzn=ilemezczyzn+1}
        }
        return res.json(ilemezczyzn);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/ilenieokreslonych', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilemezczyzn=0
        for(let i=0;i<x;i++){
            if(allpolls[i].sex === "Wole nie odpowiadać"){
                ilemezczyzn=ilemezczyzn+1}
        }
        return res.json(ilemezczyzn);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/wyksztalceniesrednie', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilesrednie=0
        for(let i=0;i<x;i++){
            if(allpolls[i].education==="średnie"){
                ilesrednie=ilesrednie+1}
        }
        return res.json(ilesrednie);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/wyksztalceniepodstawowe', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilepodstawowe=0
        for(let i=0;i<x;i++){
            if(allpolls[i].education==="podstawowe"){
                ilepodstawowe=ilepodstawowe+1}
        }
        return res.json(ilepodstawowe);
    } catch (err) {
        return res.json({error: err.message});
    }
});
router.get('/wyksztalceniewyzsze', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilewyzsze=0
        for(let i=0;i<x;i++){
            if(allpolls[i].education==="wyższe"){
                ilewyzsze=ilewyzsze+1}
        }
        return res.json(ilewyzsze);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/ilemieszkazrodzicami', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilezrodzicami=0
        for(let i=0;i<x;i++){
            if(allpolls[i].household.living_with_parents===true){
                ilezrodzicami=ilezrodzicami+1}
        }
        return res.json(ilezrodzicami);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/ilemapartnerke', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let ilepartnerka=0
        for(let i=0;i<x;i++){
            if(allpolls[i].household.partner===true){
                ilezrodzicami=ilepartnerka+1}
        }
        return res.json(ilepartnerka);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.get('/sredniawieku', async (req, res) => {
    try {
        const allpolls=await Poll.find()
        const x=Object.keys(allpolls).length
        let sumalat=0
        let currentTime= new Date().getFullYear()
        for(let i=0;i<x;i++){
            let datebirth= allpolls[i].date_of_birth
            let x=new Date(datebirth).getFullYear()
            let wiek=currentTime-x
            sumalat=sumalat+wiek
        }
        sumalat=sumalat/x
        return res.json(sumalat);
    } catch (err) {
        return res.json({error: err.message});
    }
});

router.delete('/delete', async (req, res) => {
    const pesel = req.body.pesel;

    await Poll.findOneAndDelete({ pesel: pesel })
        .then((poll) => {
            res.json({
                poll: poll,
                success: true
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(404).json({
                success: false
            });
        })
});

router.get('/monthly_earnings', async (req, res) => {
    const data = await Poll.find()
    .then(result => {
        return result.map(poll => poll.workplace.monthly_earnings)
    })
    .then(list => {
        const count = list.length;
        let brutto_sum = 0;
        let netto_sum = 0;
        list.forEach(el => {
            brutto_sum += el.brutto;
            netto_sum += el.netto;
        })
        const brutto_avg = brutto_sum / count;
        const netto_avg = netto_sum / count;
        res.json({
            all: list,
            brutto_avg: brutto_avg,
            netto_avg: netto_avg
        })
        return list
    })
    .catch(err=>{
        console.log(err);
        res.json(err)
    })
    console.log(data);
})

module.exports = router;