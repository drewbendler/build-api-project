const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emissions_vs_climate', {
  useNewUrlParser: true
});

module.exports = mongoose;
