const Climate = require('../models/Climate');
const ClimateData = require('./fossil-fuels.json');

Climate.remove({});
Climate.collection
  .insert(ClimateData)
  .then(climateData => {
    console.log(climateData);
  })
  .catch(err => {
    console.log(err);
  });
