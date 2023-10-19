import { createSlice } from '@reduxjs/toolkit';
import { fetchCities, fetchCityDetails, searchCities, createCity, createAllCities, createItinerariesByCity } from '../actions/cityActions';

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
        state.filteredCities = action.payload;
      })
      .addCase(createCity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Actualiza tus datos según la respuesta del servidor
      })
      .addCase(createCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createAllCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createAllCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Actualiza tus datos según la respuesta del servidor
      })
      .addCase(createAllCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createItinerariesByCity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createItinerariesByCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Actualiza tus datos según la respuesta del servidor
      })
      .addCase(createItinerariesByCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;
