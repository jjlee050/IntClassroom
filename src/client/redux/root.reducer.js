import { combineReducers } from 'redux';

import chartReducer from './chart/chart.reducer';
import trackingReducer from './tracking/tracking.reducer';

const rootReducer = combineReducers({
  chart: chartReducer,
  tracking: trackingReducer
});

export default rootReducer;
