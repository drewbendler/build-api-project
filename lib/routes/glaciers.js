const express = require('express');

const glacierController = require('../controllers/glaciers');

const router = express.Router();

router.get('/glacier', glacierController.index);
router.get('/glacier/year/:Year', glacierController.year);
router.post('/glacier', glacierController.create);

module.exports = router;
