import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Obtener todas las ciudades desde el backend
export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
  try {
    const response = await axios.get('http://localhost:5000/cities'); // Ajusta la ruta según tu backend
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
});

const citySlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        // Filtrar duplicados basados en `location.city` y `location.country`
        const uniqueCities = action.payload.filter((city, index, self) => {
          // Comprobación de que `city.location` existe antes de acceder a sus propiedades
          const location = city.location || {};
          return index === self.findIndex((t) => (
            t.location?.city === location.city && t.location?.country === location.country
          ));
        });

        state.cities = uniqueCities;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default citySlice.reducer;
