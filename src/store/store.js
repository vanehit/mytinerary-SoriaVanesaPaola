import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducers';
import itineraryReducer from './reducers/itineraryReducers';
import  { fetchCities, fetchCityDetails } from './actions/cityActions'; 
import { fetchItinerariesByCity } from './actions/itineraryActions';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    itinerary: itineraryReducer,
  },
});
