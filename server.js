const express = require('express');

const port = 4000;
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
  res.render('hello', {});
})

app.listen(port, ()=>{
  console.log('Server sueche');
})