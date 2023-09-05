import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asincrónica para cargar ciudades
export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
  const response = await axios.get('http://localhost:5000/cities');
  return response.data;
});

// Acción asincrónica para cargar detalles de la ciudad por ID
export const fetchCityDetails = createAsyncThunk('city/fetchCityDetails', async (cityId) => {
  const response = await axios.get(`http://localhost:5000/cities/${cityId}`);
  return response.data;
});

export const searchCities = (searchTerm) => {
  return (dispatch, getState) => {
    const { cities } = getState().city;
    
    // Realiza la búsqueda local en las ciudades ya cargadas
    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    
    dispatch(updateFilteredCities(filteredCities));
  };
};


export const updateFilteredCities = (filteredCities) => {
  return {
    type: 'UPDATE_FILTERED_CITIES',
    payload: filteredCities,
  };
};