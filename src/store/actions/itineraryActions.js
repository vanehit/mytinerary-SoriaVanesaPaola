import axios from "axios";
import { setItineraries } from '../reducers/itineraryReducers'; // Importa setItineraries del archivo de reducers

// Acción para cargar itinerarios
export const loadItineraries = (cityId) => async (dispatch) => {

  try {
    const response = await axios.get(`http://localhost:5000/itineraries/${cityId}`);
    dispatch(setItineraries(response.data)); // Utiliza setItineraries del reducer
  } catch (error) {
    console.error('Error loading itineraries:', error);
  }
};
