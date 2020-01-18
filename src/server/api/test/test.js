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
        data_return[0]["data"][data_return[0]["data"].length - 1].value += 1;
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
        data_return[1]["data"][data_return[1]["data"].length - 1].value += 1;
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
        data_return[2]["data"][data_return[2]["data"].length - 1].value += 1;
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
        data_return[3]["data"][data_return[3]["data"].length - 1].value += 1;
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
        data_return[4]["data"][data_return[4]["data"].length - 1].value += 1;
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
    if (
      data[i][0] > 1 &&
      data_return[5]["data"][data_return[5]["data"].length - 1].time
    ) {
      if (
        data_return[5]["data"][data_return[5]["data"].length - 1].time ==
        data[i][2]
      ) {
        data_return[5]["data"][data_return[5]["data"].length - 1].value += 1;
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
  } else if (data[i][1] == "Disgusted") {
    if (
      data[i][0] > 1 &&
      data_return[6]["data"][data_return[6]["data"].length - 1].time
    ) {
      if (
        data_return[6]["data"][data_return[6]["data"].length - 1].time ==
        data[i][2]
      ) {
        data_return[6]["data"][data_return[6]["data"].length - 1].value += 1;
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
    console.log(data_return);
    res.json(data_return);
  }
}
