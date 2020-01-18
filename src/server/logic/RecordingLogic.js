const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sdk = require('microsoft-cognitiveservices-speech-sdk');

// replace with your own subscription key,
// service region (e.g., "westus"), and
// the name of the file you want to run
// through the speech recognizer.
const subscriptionKey = 'c1b4b78c77d5406883eab62e0b13912b';
const serviceRegion = 'southeastasia'; // e.g., "westus"

const filename = path.join(__dirname, 'speech.wav');

module.exports = {
  analyse: (req, res) => {
    const imageFile = req.files.file;
    const imageFileName = req.body.fileName;
    const filePath = `${path.join(__dirname, '../uploads')}/${imageFileName}`;
    imageFile.mv(filePath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
    const readmeStream = fs.createReadStream(filePath);
    const fileSizeInBytes = req.headers['content-length']
    
  }
};
