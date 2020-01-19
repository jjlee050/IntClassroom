import { combineReducers } from 'redux';

import chartReducer from './chart/chart.reducer';

const rootReducer = combineReducers({
  chart: chartReducer
});

export default rootReducer;
