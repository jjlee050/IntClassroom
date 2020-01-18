const SampleAPI = require('./api/SampleAPI');
const RecordingAPI = require('./api/RecordingAPI');
module.exports = {
  getAllEndpoints(app) {
    app.use('/api/', SampleAPI);
    app.use('/api/recordings', RecordingAPI);
  }
};
