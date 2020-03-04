const Glacier = require('../models/Glaciers');

module.exports = {
  index: (req, res) => {
    Glacier.find({}).then(glaciers => {
      res.json(glaciers);
    });
  }
};
