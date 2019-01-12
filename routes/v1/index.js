const express = require('express');
const router = express.Router();

router.use('/', require('./bots'));
router.use('/', require('./messages'));

module.exports = exports = router;