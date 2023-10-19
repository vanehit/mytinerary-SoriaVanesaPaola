import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Acción asincrónica para crear una sola ciudad por nombre
export const createCity = createAsyncThunk('createCity', async (name) => {
  try {
    const response = await axios.get(`http://localhost:5000/cities/${name}`);
    return response.data.response;
  } catch (error) {
    console.log(error);
    toast.error("So sorry, we were unable to connect to the server. Maybe it's your fault, maybe not...");
    throw new Error(error);
  }
});

// Acción asincrónica para crear todas las ciudades
export const createAllCities = createAsyncThunk('createAllCities', async () => {
  try {
    const response = await axios.get('http://localhost:5000/cities');
    return response.data.response;
  } catch (error) {
    console.log(error);
    toast.error("So sorry, we were unable to connect to the server. Maybe it's your fault, maybe not...");
    throw new Error(error);
  }
});

// Acción asincrónica para crear itinerarios por ciudad
export const createItinerariesByCity = createAsyncThunk('createItinerariesByCity', async (city) => {
  try {
    const response = await axios.get(`http://localhost:5000/itineraries/${city}`);
    return response.data.response;
  } catch (error) {
    console.log(error);
    toast.error("So sorry, we were unable to connect to the server. Maybe it's your fault, maybe not...");
    throw an Error(error);
  }
});
