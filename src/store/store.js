import { configureStore } from '@reduxjs/toolkit';
import cityReducers from './reducers/cityReducers';

export const store = configureStore({
  reducer: {
    city: cityReducers,
  },
});
