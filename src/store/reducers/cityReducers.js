import { createSlice } from '@reduxjs/toolkit';
import { fetchCities, fetchCityDetails, searchCities } from '../actions/cityActions';

const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: [],
    filteredCities: [],
    cityDetails: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
        state.filteredCities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCityDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCityDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cityDetails = action.payload;
      })
      .addCase(fetchCityDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchCities, (state, action) => {
        // Actualizamos filteredCities con los resultados de búsqueda
        state.filteredCities = action.payload;
      });
  },
});

export default citySlice.reducer;
