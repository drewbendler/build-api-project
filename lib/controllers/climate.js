const Climate = require('../models/Climate');

module.exports = {
  index: (req, res) => {
    Climate.find({}).then(climate => {
      res.json(climate);
    });
  },
  year: (req, res) => {
    Climate.find({ Year: req.params.Year }).then(climateYear => {
      res.json(climateYear);
    });
  },
  create: (req, res) => {
    Climate.create(req.body).then(climate => {
      res.json(climate);
    });
  }
};
