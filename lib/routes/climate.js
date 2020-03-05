const express = require('express');

const climateController = require('../controllers/climate');

const router = express.Router();

router.get('/climate', climateController.index);
router.get('/climate/year/:Year', climateController.year);
router.post('/climate', climateController.create);

module.exports = router;
