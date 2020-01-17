const express = require('express');
const SampleLogic = require('../logic/SampleLogic');

const router = express.Router();

router.get('/getUsername', (req, res) => {
  SampleLogic.getUsername(req, res);
});

module.exports = router;
