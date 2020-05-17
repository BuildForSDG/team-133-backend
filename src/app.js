const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors= require('cors');

const postRoute= require('./routes/postRoute');

const app= express();




//connecting to mongoose cluster
mongoose.connect('mongodb+srv://puritys:admin@cluster0-tyaxn.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.use(cors());
  app.use(bodyParser.json());
 app.use('/api/posts',postRoute);


  module.exports= app;
