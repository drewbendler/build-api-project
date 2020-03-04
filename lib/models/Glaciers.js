const mongoose = require('../dbs/connection');
const Schema = mongoose.Schema;

const Glacier = new Schema({
  MeanMass: Number,
  Observation: Number,
  Year: Number
});

module.exports = mongoose.model('Glacier', Glacier);
