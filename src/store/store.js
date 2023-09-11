import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducers';
import itineraryReducer from './reducers/itineraryReducers';
import authReducer from './reducers/authReducer';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    itinerary: itineraryReducer,
    auth: authReducer,
  },
});
