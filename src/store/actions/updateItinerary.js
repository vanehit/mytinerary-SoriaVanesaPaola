import axios from 'axios';
import { setItineraries } from '../reducers/itineraryReducers';

export const updateItinerary = (itineraryId, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/itineraries/${itineraryId}`, updatedData);
    dispatch(setItineraries(response.data)); // Actualizar itinerarios en el estado con los datos actualizados

    return response; // Devolvemos la respuesta del servidor

  } catch (error) {
    throw error;
  }
  
};
