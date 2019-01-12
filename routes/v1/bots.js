const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/bots');

//links api bots
router.get('/bots', ctrl.findAll);
router.get('/bots/id/:id', ctrl.findOne);
router.post('/bots', ctrl.insert);
router.put('/bots', ctrl.update);
router.delete('/bots', ctrl.deleteOne);


module.exports = router;
