const Climate = require('../models/Climate');

module.exports = {
  index: (req, res) => {
    Climate.find({}).then(climate => {
      res.json(climate);
    });
  }
};
