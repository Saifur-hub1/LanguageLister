const express = require('express');
const mongoose = require('mongoose');
const {createDataGetController, createDataPostController} = require('./dataController');

const port = 4000;
const app = express();

// USING MIDDLEWARE TO LOG DATA
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// VIEW ENGINE SET UP
app.set('view engine', 'ejs');

// GET REQUEST
app.get('/', createDataGetController);

// POST REQUEST
app.post('/', createDataPostController);

mongoose.connect('mongodb://127.0.0.1:27017/programmingLanguage')
  .then(()=>{
    app.listen(port, ()=>{
      console.log('Suneche');
    })
  })
  .catch((e)=>{
    console.log(e);
  })
;