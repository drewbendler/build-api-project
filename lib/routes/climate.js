const express = require('express');

const climateController = require('../controllers/climate');

const router = express.Router();

router.get('/', climateController.index);

module.exports = router;
