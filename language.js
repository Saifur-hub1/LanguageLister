const {Schema, model} = require('mongoose');

const dataSchema =  new Schema({
  langName: [] 
})

const data = model('data', dataSchema);

module.exports = data;