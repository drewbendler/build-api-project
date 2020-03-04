const express = require('express');

const glacierController = require('../controllers/glaciers');

const router = express.Router();

router.get('/glacier', glacierController.index);

module.exports = router;
