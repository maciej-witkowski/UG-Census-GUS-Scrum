const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
app.use(express.json());

const app = express()
const port = 3000
app.use(cors)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})