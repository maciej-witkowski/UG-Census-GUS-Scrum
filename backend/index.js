const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const User = require('./models/user');

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

// user schema test
app.post('/', async (req, res) => {
  const new_user = new User({
    ...req.body
  });

  new_user.save().then(user => res.json(user));
  res.send(req.body)
});

const dbConnData = {
  username: process.env.MONGO_USERNAME_ADMIN,
  password: process.env.MONGO_PASSWORD_ADMIN,
  port: process.env.PORT
};

mongoose
  .connect(`mongodb+srv://${dbConnData.username}:${dbConnData.password}@clustermain.dxauc.mongodb.net/db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = dbConnData.port;
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB', error));