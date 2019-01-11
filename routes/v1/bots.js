const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/bots');

router.get('/bots', ctrl.teste);
router.get('/bots/:id', ctrl.getBotId);

module.exports = router;
