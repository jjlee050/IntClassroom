import React from 'react';
import Chart from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

import moment from 'moment';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      plugins: [ChartAnnotation],
      data: {
        labels: this.props.data[0].data.map(d => d.time),
        datasets: [
          {
            label: this.props.data[0].label,
            data: this.props.data[0].data.map(d => d.value),
            fill: 'none',
            backgroundColor: this.props.data[0].color,
            pointRadius: 2,
            borderColor: this.props.data[0].color,
            borderWidth: 1,
            lineTension: 0
          },
          {
            label: this.props.data[1].label,
            data: this.props.data[1].data.map(d => d.value),
            fill: 'none',
            backgroundColor: this.props.data[1].color,
            pointRadius: 2,
            borderColor: this.props.data[1].color,
            borderWidth: 1,
            lineTension: 0
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series'
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        },
        annotation: {
          events: ['click'],
          annotations: [
            {
              drawTime: 'afterDatasetsDraw',
              type: 'box',
              xScaleID: 'x-axis-0',
              xMin: moment().subtract(40, 'seconds'),
              xMax: moment().subtract(20, 'seconds'),
              backgroundColor: 'rgba(124,77,255, 0.5)',
              borderColor: '#26c6da',
              borderWidth: 1,
              onClick: function(e) {
                console.log('Box', e.type, this);
              }
            }
          ]
        }
      }
    });
  }

  componentDidUpdate() {
    const xMax = moment().subtract(
      Math.floor(Math.random() * Math.floor(80) + 10),
      'seconds'
    );
    this.myChart.options.annotation.annotations[0].xMin = moment(xMax).subtract(
      10,
      'seconds'
    );
    this.myChart.options.annotation.annotations[0].xMax = xMax;
    this.myChart.data.labels = this.props.data[0].data.map(d => d.time);
    this.myChart.data.datasets[0].data = this.props.data[0].data.map(
      d => d.value
    );
    this.myChart.data.datasets[1].data = this.props.data[1].data.map(
      d => d.value
    );
    this.myChart.update();
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default LineChart;
