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
    filterCities: (state, action) => {
      const search = action.payload.toLowerCase();
      state.filteredCities = state.cities.filter(city =>
        city.name.toLowerCase().includes(search)
      );
    },
  },
});

export const { setCities, filterCities } = citySlice.actions;
export default citySlice.reducer;