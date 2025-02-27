import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCityDetails = createAsyncThunk('cityDetails/fetchCityDetails', async (cityId) => {
  try {
    const response = await axios.get(`http://localhost:5000/cities/${cityId}`);
    return response.data; // Confirmar que los datos contienen location, activities, etc.
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
});

const cityDetailsSlice = createSlice({
  name: 'cityDetails',
  initialState: {
    selectedCity: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCityDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCity = action.payload;
      })
      .addCase(fetchCityDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default cityDetailsSlice.reducer;
