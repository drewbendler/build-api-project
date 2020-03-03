const express = require('express');

const router = express.Router();

router.use('/climate', require('./climate'));
router.use('/emission', require('./emissions'));

module.exports = router;
