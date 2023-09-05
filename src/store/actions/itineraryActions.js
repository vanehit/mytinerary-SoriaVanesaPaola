import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asincrónica para obtener todos los itinerarios
export const fetchItineraries = createAsyncThunk('itinerary/fetchItineraries', async () => {
  const response = await axios.get('http://localhost:5000/itineraries');
  return response.data;
});

// Acción asincrónica para cargar itinerarios por ciudad
export const fetchItinerariesByCity = createAsyncThunk('itinerary/fetchItinerariesByCity', async (cityId) => {
  try {
    const response = await axios.get(`http://localhost:5000/itineraries/city/${cityId}`);
     // console.log(response.data); // Verifica la respuesta en la consola.
    return response.data;
  } catch (error) {
    console.error(error); 
    throw error; 
  }
});

// Acción asincrónica para crear un nuevo itinerario
export const createNewItinerary = createAsyncThunk('itinerary/createNewItinerary', async (itineraryData) => {
  const response = await axios.post('http://localhost:5000/itineraries', itineraryData);
  return response.data;
});

// Acción asincrónica para actualizar un itinerario
export const updateItinerary = (itineraryId, updatedData) => {
  return {
    type: 'UPDATE_ITINERARY',
    payload: { itineraryId, updatedData }
  };
};


// Acción asincrónica para eliminar un itinerario
export const deleteItinerary = createAsyncThunk('itinerary/deleteItinerary', async (itineraryId) => {
  const response = await axios.delete(`http://localhost:5000/itineraries/${itineraryId}`);
  return response.data;
});
