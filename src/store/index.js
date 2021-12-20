import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import clientReducer from './clientsSlice';
import summary1Reducer from './summary1Slice';
import summary2Reducer from './summary2Slice';

export const store = configureStore(
  {
    reducer: {
      userInfo: userReducer,
      clientInfo: clientReducer,
      summary1: summary1Reducer,
      summary2: summary2Reducer,
      // outcomeMetrics: outcomeMetricsReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
