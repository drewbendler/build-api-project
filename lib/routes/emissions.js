const express = require('express');

const emissionsController = require('../controllers/emissions');

const router = express.Router();

router.get('/emissions', emissionsController.index);

router.get('/emissions/country/:Country', emissionsController.country);

router.get('/emissions/year/:Year', emissionsController.year);

module.exports = router;
