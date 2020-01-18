import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCharts } from '../redux/chart/chart.selector';

import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';

import { getData, getDateData } from '../redux/data';
import ChartActionTypes from '../redux/chart/chart.types';

import '../assets/stylesheets/home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
      dateData: getDateData(this.props.charts[0].minDate)
    };
    this.updateInterval = undefined;
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      });
    }, 5000);

    this.updateInterval = setInterval(() => {
      this.setState({
        dateData: getDateData()
      });
    }, 5000);
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <div className="main chart-wrapper">
          <LineChart
            minDate={this.props.charts[0].minDate}
            maxDate={this.props.charts[0].maxDate}
            data={this.state.dateData}
            id={ChartActionTypes.AVERAGE_EMOTION_ID}
          />
        </div>
        <div className="space"></div>
        <div className="main chart-wrapper">
          <DoughnutChart
            data={this.state.data[3].data}
            title={this.state.data[3].title}
            colors={[
              '#a8e0ff',
              '#8ee3f5',
              '#70cad1',
              '#3e517a',
              '#b08ea2',
              '#BBB6DF'
            ]}
            id={ChartActionTypes.TOTAL_EMOTION_ID}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  charts: selectCharts
});

export default connect(mapStateToProps)(HomePage);
