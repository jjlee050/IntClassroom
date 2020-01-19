const emotions = [
  'Anger',
  'Contempt',
  'Disgust',
  'Fear',
  'Happiness',
  'Neutral',
  'Sadness',
  'Surprise'
];

// Data generation
function getRandomArray(numItems, labels) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (labels == undefined) {
    labels = names;
  }
  let data = [];
  for (var i = 0; i < numItems; i++) {
    data.push({
      label: labels[i],
      value: Math.round(100 * Math.random())
    });
  }
  return data;
}

function getRandomDateArray(fromTime) {
  // Create random array of objects (with date)
  let numItems = 20;
  let data = [];
  let baseTime = new Date().getTime();
  let secMs = 5 * 1000;
  if (fromTime !== undefined) {
    baseTime = fromTime.toDate();
  }
  for (let i = numItems; i > 0; i--) {
    data.push({
      time: new Date(baseTime - i * secMs),
      value: Math.round(100 * Math.random())
    });
  }
  return data;
}

export function getData() {
  let data = {
    title: 'Data 4',
    data: getRandomArray(6, emotions)
  };

  return data;
}

export function getDateData(fromTime) {
  const datasets = [
    {
      label: '(Average) Excited Score',
      color: '#ff7043',
      data: getRandomDateArray(fromTime)
    },
    {
      label: '(Average) Bored Score',
      color: '#26a69a',
      data: getRandomDateArray(fromTime)
    }
  ];
  return datasets;
}
