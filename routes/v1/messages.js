const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/messages');

//links api messages
router.get('/messages', ctrl.findAll);
router.get('/messages/id/:id', ctrl.findOne);
router.post('/messages', ctrl.insert);


module.exports = router;
