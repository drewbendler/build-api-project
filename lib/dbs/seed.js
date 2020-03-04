const Climate = require('../models/Climate');
const ClimateData = require('./climate.json');

const Emission = require('../models/Emissions');
const EmissionData = require('./fossil-fuels.json');

const Glacier = require('../models/Glaciers');
const GlacierData = require('../dbs/glaciers.json');

const eData = EmissionData.map(item => {
  const emission = {
    Country: item.Country,
    LiquidFuel: item.LiquidFuel,
    GasFuel: item.GasFuel,
    SolidFuel: item.SolidFuel,
    Total: item.Total,
    Year: item.Year
  };
  return emission;
});

Climate.remove({});
Climate.collection
  .insert(ClimateData)
  .then(climateData => {
    // console.log(climateData);
  })
  .catch(err => {
    console.log(err);
  });

Emission.remove({});
Emission.collection
  .insert(eData)
  .then(emissions => {
    console.log(emissions);
  })
  .catch(err => {
    console.log(err);
  });

Glacier.remove({});
Glacier.collection
  .insert(GlacierData)
  .then(gData => {
    // console.log(gData);
  })
  .catch(err => {
    console.log(err);
  });
