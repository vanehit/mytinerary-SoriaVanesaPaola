import { createSlice } from '@reduxjs/toolkit';
import { fetchItinerariesByCity } from '../actions/itineraryActions';

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    itineraries: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerariesByCity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.itineraries = action.payload;
      })
      .addCase(fetchItinerariesByCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default itinerarySlice.reducer;
