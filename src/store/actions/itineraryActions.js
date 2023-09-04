import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asincrónica para obtener todos los itinerarios
export const fetchItineraries = createAsyncThunk('itinerary/fetchItineraries', async () => {
  const response = await axios.get('http://localhost:5000/itineraries');
  return response.data;
});

// Acción asincrónica para cargar itinerarios por ciudad
export const fetchItinerariesByCity = createAsyncThunk('itinerary/fetchItinerariesByCity', async (cityId) => {
  const response = await axios.get(`http://localhost:5000/itineraries/city/${cityId}`);
  return response.data;
});

// Acción asincrónica para crear un nuevo itinerario
export const createNewItinerary = createAsyncThunk('itinerary/createNewItinerary', async (itineraryData) => {
  const response = await axios.post('http://localhost:5000/itineraries', itineraryData);
  return response.data;
});

// Acción asincrónica para actualizar un itinerario
export const updateItinerary = createAsyncThunk('itinerary/updateItinerary', async (itineraryData) => {
  const response = await axios.put(`http://localhost:5000/itineraries/${itineraryData.id}`, itineraryData);
  return response.data;
});

// Acción asincrónica para eliminar un itinerario
export const deleteItinerary = createAsyncThunk('itinerary/deleteItinerary', async (itineraryId) => {
  const response = await axios.delete(`http://localhost:5000/itineraries/${itineraryId}`);
  return response.data;
});
