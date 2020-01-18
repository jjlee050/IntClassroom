import React from 'react';

import TimeFilter from './TimeFilter';

import '../assets/stylesheets/home.css';

const ChartContainter = ({ chartId, chart }) => {
  return (
    <div>
      <TimeFilter chartId={chartId} />
      <div className="main chart-wrapper">{chart}</div>
    </div>
  );
};

export default ChartContainter;
