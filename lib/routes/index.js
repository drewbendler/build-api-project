const express = require('express');

const router = express.Router();

router.use('/climate', require('./climate'));
router.use('/emission', require('./emissions'));
router.use('/glacier', require('./glaciers'));

module.exports = router;
