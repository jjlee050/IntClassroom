const express = require('express');
const RecordingLogic = require('../logic/RecordingLogic');

const router = express.Router();

router.post('/analyse', (req, res) => {
    RecordingLogic.analyse(req, res);
});

module.exports = router;
