const express = require('express');

const router = express.Router();

router.use('/climate', require('./climate'));

module.exports = router;
