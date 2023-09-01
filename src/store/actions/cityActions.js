import axios from 'axios';
import { setCityDetails, setCities } from '../reducers/cityReducers'; 

export const loadCityDetails = (_id) => async (dispatch) => {

  try {
    const response =  await axios.get(`http://localhost:5000/cities/${_id}`);

    dispatch(setCityDetails(response.data)); // Utiliza setCityDetails del reducer de ciudad
    console.log(response);
  } catch (error) {
    console.error('Error loading city details:', error);
  }
};


export const searchCities = (searchText) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/cities?search=${searchText}`);
    dispatch(setCities(response.data));
  } catch (error) {
    console.error('Error fetching filtered cities:', error);
  }
};
