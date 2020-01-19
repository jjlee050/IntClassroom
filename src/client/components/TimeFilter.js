import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import {
  setMinDate,
  setMaxDate,
  clearFilter
} from '../redux/chart/chart.action';

const BasicDateTimePicker = ({
  chartId,
  setMinDate,
  setMaxDate,
  clearFilter
}) => {
  const numItems = 20;
  const secDiff = 5;

  const [selectedFromDate, setFromDate] = useState(
    moment().subtract(numItems * secDiff, 'seconds')
  );
  const [selectedToDate, setToDate] = useState(moment());

  React.useEffect(() => {
    let endTime = moment(selectedFromDate).add(secDiff * numItems, 'seconds');
    if (moment().isAfter(endTime)) {
      setToDate(endTime);
    } else {
      setToDate(moment());
    }
  }, [selectedFromDate]);

  const handleFromDateChange = dateTime => {
    if (dateTime.isAfter(moment())) {
      setFromDate(moment().subtract(numItems * secDiff, 'seconds'));
    } else {
      setFromDate(dateTime);
    }
  };

  const handleTimeFilter = () => {
    setMinDate({
      id: chartId,
      data: selectedFromDate
    });
    setMaxDate({
      id: chartId,
      data: selectedToDate
    });
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Fragment>
        <Box display="flex" justifyContent="center" m={1}>
          <Box>
            <DateTimePicker
              inputVariant="outlined"
              value={selectedFromDate}
              disableFuture
              onChange={handleFromDateChange}
              label="From"
              showTodayButton
            />
          </Box>
          <Box>
            <DateTimePicker
              inputVariant="outlined"
              value={selectedToDate}
              disabled
              disableFuture
              label="To"
              showTodayButton
            />
          </Box>
          <Box m={1}>
            <Button
              m={1}
              onClick={handleTimeFilter}
              variant="contained"
              color="primary"
            >
              Filter
            </Button>
          </Box>
          <Box m={1}>
            <Button
              onClick={() => clearFilter(chartId)}
              variant="contained"
              color="secondary"
            >
              Refresh
            </Button>
          </Box>
        </Box>
      </Fragment>
    </MuiPickersUtilsProvider>
  );
};

const mapDispatchToProps = dispatch => ({
  setMinDate: chartItem => dispatch(setMinDate(chartItem)),
  setMaxDate: chartItem => dispatch(setMaxDate(chartItem)),
  clearFilter: id => dispatch(clearFilter(id))
});

export default connect(null, mapDispatchToProps)(BasicDateTimePicker);
