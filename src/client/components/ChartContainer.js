import React from 'react';

import TimeFilter from './TimeFilter';

import { Box } from '@material-ui/core';
import '../assets/stylesheets/stats.css';

const ChartContainter = ({ chartId, chart }) => {
  return (
    <Box display="flex" flexDirection="column" alignContent="center" m={1}>
      <Box>
        <div className="main chart-wrapper">{chart}</div>
      </Box>
      <Box className="spacing" />
      <Box>
        <TimeFilter chartId={chartId} />
      </Box>
    </Box>
  );
};

export default ChartContainter;
