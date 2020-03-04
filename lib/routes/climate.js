const express = require('express');

const climateController = require('../controllers/climate');

const router = express.Router();

router.get('/climate', climateController.index);
router.get('/climate/:Year', climateController.year);
router.get('/climate', climateController.create);

module.exports = router;
