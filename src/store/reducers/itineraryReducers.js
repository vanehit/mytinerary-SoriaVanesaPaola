// itineraryReducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itineraries: [],
};

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    setItineraries: (state, action) => {
      state.itineraries = action.payload;
    },
  },
});

export const { setItineraries } = itinerarySlice.actions;

export default itinerarySlice.reducer;
