const express = require('express');

const Endpoint = require('./endpoint');

const app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

Endpoint.getAllEndpoints(app);
