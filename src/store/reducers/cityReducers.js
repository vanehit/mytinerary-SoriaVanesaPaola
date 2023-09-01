// cityReducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  filteredCities: [],
  cityDetails: null, // Agregar el estado para almacenar los detalles de la ciudad
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
      state.filteredCities = action.payload;
    },
    setCityDetails: (state, action) => {
      state.cityDetails = action.payload;
    },
  },
});

export const { setCities, setCityDetails } = citySlice.actions;
export default citySlice.reducer;
