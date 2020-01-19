// import express JS module into app
// and creates its variable.
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
// Creates a server which runs on port 3000 and
// can be accessed through localhost:3000
app.listen(3002, function() {
  console.log("server running on port 3002");
});

// Function callName() is executed whenever
// url is of the form localhost:3000/name
app.get("/record/startVideo", callName);

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
          if (data_return[5]["data"][data_return[5]["data"].length - 1].hasOwnProperty('time')) {
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
