const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const expressWinston = require('express-winston');
const winston = require('winston');

const Endpoint = require('./endpoint');

const app = express();

app.use(express.static('dist'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      level: 'info',
    })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json({
      space: 2
    }),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
      info => `${info.timestamp} ${info.level}:${info.message}`
    ),
  ),
  meta: true,
  msg: '[{{req.hostname}}] HTTP {{req.method}} {{res.statusCode}} {{req.url}} {{res.responseTime}}ms',
  expressFormat: false,
  colorize: process.stdout.isTTY,
  ignoreRoute() { return false; }
}));
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      level: 'error',
    })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json({
      space: 2
    }),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
      error => `${error.timestamp} ${error.level}: ${error.message}`
    ),
  )
}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

Endpoint.getAllEndpoints(app);
