import axios from 'axios';

// Acciones de registro y inicio de sesión
export const registerUser = (formData) => async (dispatch) => {
  try {
    const responseRegister = await axios.post('http://localhost:5000/auth/register', formData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: responseRegister.data.token });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    const responseLogin = await axios.post('http://localhost:5000/auth/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: responseLogin.data.token });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};
