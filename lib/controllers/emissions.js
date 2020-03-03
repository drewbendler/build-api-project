const Emission = require('../models/Emissions');

module.exports = {
  index: (req, res) => {
    Emission.find({}).then(emission => {
      res.json(emission);
    });
  }
};
