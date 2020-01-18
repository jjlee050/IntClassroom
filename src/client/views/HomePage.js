import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCharts } from '../redux/chart/chart.selector';

import ChartContainer from '../components/ChartContainer';
import DoughnutChart from '../components/DoughnutChart';
import LineChart from '../components/LineChart';

import { getData, getDateData } from '../redux/data';
import ChartActionTypes from '../redux/chart/chart.types';

import '../assets/stylesheets/home.css';
import { Box } from '@material-ui/core';

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
        <Box
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          m={2}
        >
          <Box>
            <ChartContainer
              chartId={ChartActionTypes.AVERAGE_EMOTION_ID}
              chart={<LineChart data={this.state.dateData} />}
            />
          </Box>
          <Box>
            <ChartContainer
              chartId={ChartActionTypes.TOTAL_EMOTION_ID}
              chart={
                <DoughnutChart
                  data={this.state.data.data}
                  title={this.state.data.title}
                  colors={[
                    '#a8e0ff',
                    '#8ee3f5',
                    '#70cad1',
                    '#3e517a',
                    '#b08ea2',
                    '#BBB6DF'
                  ]}
                />
              }
            />
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  charts: selectCharts
});

export default connect(mapStateToProps)(HomePage);
