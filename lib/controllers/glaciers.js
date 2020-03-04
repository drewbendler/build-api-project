const Glacier = require('../models/Glaciers');

module.exports = {
  index: (req, res) => {
    Glacier.find({}).then(glaciers => {
      res.json(glaciers);
    });
  },
  year: (req, res) => {
    Glacier.find({ Year: req.params.Year }).then(glaciers => {
      res.json(glaciers);
    });
  }
};
