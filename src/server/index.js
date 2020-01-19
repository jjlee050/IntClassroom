const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const expressWinston = require('express-winston');
const winston = require('winston');
const path = require('path');
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

// Function callName() is executed whenever
// url is of the form localhost:3000/name
app.get("/api/startVideo", callName);

function callName(req, res) {
  console.log("callname");
  // Use child_process.spawn method from
  // child_process module and assign it
  // to variable spawn
  var spawn = require("child_process").spawn;

  // Parameters passed in spawn -
  // 1. type_of_script
  // 2. list containing Path of the script
  // and arguments for the script
  //   var chunks = [];

  // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will
  // so, first name = Mike and last name = Will
  var process = spawn("python", ["./emotions.py"]);

  //   Takes stdout data from script which executed
  //     with arguments and send this data to res object
  process.stdout.on("data", function(temp) {
    if (temp) {
      //   console.log(data);
      var str_data = temp.toString();
      //   console.log(str_data);
      //   console.log(typeof str_data);
      var str_data2 = str_data.replace(/'/g, '"');
      //   console.log(str_data2);
      data = JSON.parse(str_data2).data;
      //   console.log(temp);

      var data_return = [
        {
          label: "Surprised",
          data: []
        },
        {
          label: "Angry",
          data: []
        },
        {
          label: "Happy",
          data: []
        },
        {
          label: "Neutral",
          data: []
        },
        {
          label: "Sad",
          data: []
        },
        {
          label: "Fearful",
          data: []
        },
        {
          label: "Disgusted",
          data: []
        }
      ];

      for (i = 0; i < data.length; i++) {
        if (data[i][0] == "Surprised") {
          if (
            data[i][0] > 1 &&
            data_return[0]["data"][data_return[0]["data"].length - 1].time
          ) {
            if (
              data_return[0]["data"][data_return[0]["data"].length - 1].time ==
              data[i][2]
            ) {
              data_return[0]["data"][
                data_return[0]["data"].length - 1
              ].value += 1;
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[0]["data"].push(temp);
            }
          } else {
            temp = {
              value: 1,
              time: data[i][2]
            };
            data_return[0]["data"].push(temp);
          }
        } else if (data[i][1] == "Angry") {
          if (
            data[i][0] > 1 &&
            data_return[1]["data"][data_return[1]["data"].length - 1].time
          ) {
            if (
              data_return[1]["data"][data_return[1]["data"].length - 1].time ==
              data[i][2]
            ) {
              data_return[1]["data"][
                data_return[1]["data"].length - 1
              ].value += 1;
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[1]["data"].push(temp);
            }
          } else {
            temp = {
              value: 1,
              time: data[i][2]
            };
            data_return[1]["data"].push(temp);
          }
        } else if (data[i][1] == "Happy") {
          if (
            data[i][0] > 1 &&
            data_return[2]["data"][data_return[2]["data"].length - 1].time
          ) {
            if (
              data_return[2]["data"][data_return[2]["data"].length - 1].time ==
              data[i][2]
            ) {
              data_return[2]["data"][
                data_return[2]["data"].length - 1
              ].value += 1;
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[2]["data"].push(temp);
            }
          } else {
            temp = {
              value: 1,
              time: data[i][2]
            };
            data_return[2]["data"].push(temp);
          }
        } else if (data[i][1] == "Neutral") {
          if (
            data[i][0] > 1 &&
            data_return[3]["data"][data_return[3]["data"].length - 1].time
          ) {
            if (
              data_return[3]["data"][data_return[3]["data"].length - 1].time ==
              data[i][2]
            ) {
              data_return[3]["data"][
                data_return[3]["data"].length - 1
              ].value += 1;
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[3]["data"].push(temp);
            }
          } else {
            temp = {
              value: 1,
              time: data[i][2]
            };
            data_return[3]["data"].push(temp);
          }
        } else if (data[i][1] == "Disgusted") {
          if (
            data[i][0] > 1 &&
            data_return[4]["data"][data_return[4]["data"].length - 1].time
          ) {
            if (
              data_return[4]["data"][data_return[4]["data"].length - 1].time ==
              data[i][2]
            ) {
              data_return[4]["data"][
                data_return[4]["data"].length - 1
              ].value += 1;
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[4]["data"].push(temp);
            }
          } else {
            temp = {
              value: 1,
              time: data[i][2]
            };
            data_return[4]["data"].push(temp);
          }
        } else if (data[i][1] == "Fearful") {
          console.log(data_return[5]["data"][data_return[5]["data"].length - 1]);
          if (typeof data_return[5]["data"][data_return[5]["data"].length - 1] !== 'undefined') {
            if (
              data_return[5]["data"][data_return[5]["data"].length - 1].time != 
              data[i][0] > 1 
            ) {
              if (
                data_return[5]["data"][data_return[5]["data"].length - 1].time ==
                data[i][2]
              ) {
                data_return[5]["data"][
                  data_return[5]["data"].length - 1
                ].value += 1;
              } else {
                temp = {
                  value: 1,
                  time: data[i][2]
                };
                data_return[5]["data"].push(temp);
              }
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[5]["data"].push(temp);
            }
          }
        } else if (data[i][1] == "Disgusted") {
          if (
            data[i][0] > 1 &&
            data_return[6]["data"][data_return[6]["data"].length - 1].time
          ) {
            if (
              data_return[6]["data"][data_return[6]["data"].length - 1].time ==
              data[i][2]
            ) {
              data_return[6]["data"][
                data_return[6]["data"].length - 1
              ].value += 1;
            } else {
              temp = {
                value: 1,
                time: data[i][2]
              };
              data_return[6]["data"].push(temp);
            }
          } else {
            temp = {
              value: 1,
              time: data[i][2]
            };
            data_return[6]["data"].push(temp);
          }
        }
        if (i == data.length - 1) {
          //console.log(data_return);
          res.json(data_return);
        }
      }
    }
  });
}
