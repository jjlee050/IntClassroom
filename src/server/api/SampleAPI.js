const express = require('express');
const SampleLogic = require('../logic/SampleLogic');

const router = express();

router.get('/api/getUsername', (req, res) => {
  SampleLogic.getUsername(req, res);
});
