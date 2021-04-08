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
    const allpolls=await Poll.find()
    const x= Object.keys(allpolls).length
    console.log(x)
      return res.json(x);
  });


  router.get('/ilekobiet', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilekobiet=0
    for(let i=0;i<x;i++){
        if(allpolls[i].sex=="Kobieta"){
        ilekobiet=ilekobiet+1}
    }
    console.log(ilekobiet)
    return res.json(ilekobiet);
  });
  router.get('/ilemezczyzn', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilemezczyzn=0
    for(let i=0;i<x;i++){
        if(allpolls[i].sex=="Mężczyzna"){
            ilemezczyzn=ilemezczyzn+1}
    }
    console.log(ilemezczyzn)
    return res.json(ilemezczyzn);
  });

  router.get('/ilenieokreslonych', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilemezczyzn=0
    for(let i=0;i<x;i++){
        if(allpolls[i].sex=="Wole nie odpowiadać"){
            ilemezczyzn=ilemezczyzn+1}
    }
    console.log(ilemezczyzn)
    return res.json(ilemezczyzn);
  });

  router.get('/wyksztalceniesrednie', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilesrednie=0
    for(let i=0;i<x;i++){
        if(allpolls[i].education=="średnie"){
            ilesrednie=ilesrednie+1}
    }
    console.log(ilesrednie)
    return res.json(ilesrednie);
  });

  router.get('/wyksztalceniepodstawowe', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilepodstawowe=0
    for(let i=0;i<x;i++){
        if(allpolls[i].education=="podstawowe"){
            ilepodstawowe=ilepodstawowe+1}
    }
    console.log(ilepodstawowe)
    return res.json(ilepodstawowe);
  });
  router.get('/wyksztalceniewyzsze', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilewyzsze=0
    for(let i=0;i<x;i++){
        if(allpolls[i].education=="wyższe"){
            ilewyzsze=ilewyzsze+1}
    }
    console.log(ilewyzsze)
    return res.json(ilewyzsze);
  });

  router.get('/ilemieszkazrodzicami', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilezrodzicami=0
    for(let i=0;i<x;i++){
        if(allpolls[i].household.living_with_parents==true){
            ilezrodzicami=ilezrodzicami+1}
    }
    console.log(ilezrodzicami)
    return res.json(ilezrodzicami);
  });
  router.get('/ilemapartnerke', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let ilepartnerka=0
    for(let i=0;i<x;i++){
        if(allpolls[i].household.partner==true){
            ilezrodzicami=ilepartnerka+1}
    }
    console.log(ilepartnerka)
    return res.json(ilepartnerka);
  });

  router.get('/sredniawieku', async (req, res) => {
    const allpolls=await Poll.find()
    const x=Object.keys(allpolls).length
    let sumalat=0
    let currentTime= new Date().getFullYear()
    console.log(currentTime)
    for(let i=0;i<x;i++){
        let datebirth= allpolls[i].date_of_birth
        let x=new Date(datebirth).getFullYear()
        let wiek=currentTime-x
        sumalat=sumalat+wiek
    }
    sumalat=sumalat/x
   
    return res.json(sumalat);
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

module.exports = router;