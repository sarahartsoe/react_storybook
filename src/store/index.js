import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import clientReducer from './clientsSlice';
import summary1Reducer from './summary1Slice';
import summary2Reducer from './summary2Slice';
import outcomeMetricsReducer from './metricsSlice';
import behaviorMetricsReducer from './metrics2Slice';
import opportunitySummaryReducer from './opportunitiesSlice';

export const store = configureStore(
  {
    reducer: {
      userInfo: userReducer,
      clientInfo: clientReducer,
      summary1: summary1Reducer,
      summary2: summary2Reducer,
      outcomeMetrics: outcomeMetricsReducer,
      behaviorMetrics: behaviorMetricsReducer,
      opportunitySummary: opportunitySummaryReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
