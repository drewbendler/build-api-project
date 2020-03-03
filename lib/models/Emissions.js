const mongoose = require('../dbs/connection');
const Schema = mongoose.Schema;

const Emission = new Schema({
  Country: String,
  'Gas Fuel': Number,
  'Liquid Fuel': Number,
  'Solid Fuel': Number,
  'Per Capita': Number,
  Total: Number,
  Year: Number
});

module.exports = mongoose.model('Emission', Emission);
