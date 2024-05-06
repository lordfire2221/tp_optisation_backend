const express =require('express');

const jsonwebtoken = require('jsonwebtoken');

const bodyParser = require('body-parser');

const md5 = require('md5');

const cors =require('cors');

const app = express()

app.use(bodyParser.json())
app.use(cors());
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb+srv://jeaneudestchibozo:3sxf53ZQB5hHsMVw@cluster0.czb7bsq.mongodb.net/',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));


//insertion des route 
const route_api = require('./routes')

app.use('/api/tp_optimisation',route_api)
  module.exports = app;