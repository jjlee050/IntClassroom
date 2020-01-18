import moment from 'moment';

import ChartActionTypes from './chart.types';
import { filterCharts, clearChart } from './chart.utils';

const numItems = 20;
const secDiff = 5;

const INITIAL_STATE = {
  charts: [
    {
      id: 1,
      title: 'Average Emotion',
      minDate: moment().subtract(numItems * secDiff, 'seconds'),
      maxDate: moment(),
      isFiltered: false
    },
    {
      id: 2,
      title: 'Total Emotion',
      minDate: moment().subtract(numItems * secDiff, 'seconds'),
      maxDate: moment(),
      isFiltered: false
    }
  ]
};

const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChartActionTypes.SET_MIN_DATE:
    case ChartActionTypes.SET_MAX_DATE:
      return {
        charts: filterCharts(
          state.charts,
          action.payload.id,
          action.payload.data,
          action.payload.type
        )
      };
    case ChartActionTypes.CLEAR_FILTER:
      return {
        charts: clearChart(state.charts, action.payload)
      };
    default:
      return state;
  }
};

export default chartReducer;
