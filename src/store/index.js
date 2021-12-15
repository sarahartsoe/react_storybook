import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore(
  {
    reducer: {
      userInfo: userReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
