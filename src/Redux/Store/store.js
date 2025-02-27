// src/Redux/Store/store.js
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../Slices/CitySlice';
import cityDetailsReducer from '../Slices/CityDetailsSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    cityDetails: cityDetailsReducer, // Reducer para los detalles de la ciudad
  },
});

export default store;
