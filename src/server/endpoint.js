const SampleAPI = require('./api/SampleAPI');

module.exports = {
  getAllEndpoints: (app) => {
    app.use('/api/', SampleAPI);
  }
};
