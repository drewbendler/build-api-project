const mongoose = require('../dbs/connection');
const Schema = mongoose.Schema;

const Climate = new Schema({
  Mean: Number,
  Source: String,
  Year: Number
});

module.exports = mongoose.model('Climate', Climate);
