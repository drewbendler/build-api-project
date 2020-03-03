const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/e_vs_c', {
  useNewUrlParser: true
});

module.exports = mongoose;
