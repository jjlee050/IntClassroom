import { createSelector } from 'reselect';

const selectChart = state => state.chart;

export const selectCharts = createSelector(
  [selectChart],
  chart => chart.charts
);

export const selectChartById = id =>
  createSelector([selectCharts], charts =>
    charts.find(chart => chart.id === id)
  );
