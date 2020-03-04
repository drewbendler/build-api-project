const Emission = require('../models/Emissions');

module.exports = {
  index: (req, res) => {
    Emission.find({}).then(emission => {
      res.json(emission);
    });
  },
  country: (req, res) => {
    Emission.find({ Country: req.params.Country }).then(emission => {
      res.json(emission);
    });
  },
  year: (req, res) => {
    Emission.find({ Year: req.params.Year }).then(emission => {
      res.json(emission);
    });
  },
  create: (req, res) => {
    Emission.create(req.body).then(emission => {
      res.json(emission);
    });
  }
};
