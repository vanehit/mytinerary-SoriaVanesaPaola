import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  filteredCities: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
      state.filteredCities = action.payload;
    },
  },
});

export const { setCities } = citySlice.actions;
export default citySlice.reducer;
