import ChartActionTypes from './chart.types';

export const setMinDate = ({ id, data }) => ({
  type: ChartActionTypes.SET_MIN_DATE,
  payload: { type: 'minDate', id, data }
});

export const setMaxDate = ({ id, data }) => ({
  type: ChartActionTypes.SET_MAX_DATE,
  payload: { type: 'maxDate', id, data }
});

export const clearFilter = id => ({
  type: ChartActionTypes.CLEAR_FILTER,
  payload: id
});
