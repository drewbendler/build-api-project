const express = require('express');

const emissionsController = require('../controllers/emissions');

const router = express.Router();

router.get('/', emissionsController.index);

module.exports = router;
