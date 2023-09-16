import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Acción para registrar un nuevo usuario
export const registerUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/register', formData);
    
    // Despachamos la acción de éxito de registro con el token recibido del servidor
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.token });

    // Mostramos una alerta de registro exitoso
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have successfully registered.',
    });
  } catch (error) {
    // Despachamos la acción de fallo de registro en caso de error
    dispatch({ type: 'REGISTER_FAILURE', payload: error.response?.data?.message || 'Registration failed' });
  }
};

// Acción para iniciar sesión
export const loginUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', formData);
    
    // Guardamos el token en el Local Storage
    localStorage.setItem('authToken', response.data.token);
    
    // Despachamos la acción de éxito de inicio de sesión con el token recibido del servidor
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.token });
  } catch (error) {
    // Despachamos la acción de fallo de inicio de sesión en caso de error
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response?.data?.message || 'Login failed' });
  }
};

// Acción para cerrar sesión
export const logoutUser = () => async (dispatch) => {
  try {
    // Limpiamos el token de autenticación almacenado en localStorage
    localStorage.removeItem('authToken');

    // Actualiza el estado de autenticación en Redux a false
    dispatch({ type: 'LOGOUT_SUCCESS' });

    // Utiliza navigate('/login') para navegar a la página de inicio de sesión
    Navigate('/');

  } catch (error) {
    // Manejamos cualquier error que pueda ocurrir durante la desconexión
    console.error('Error during logout:', error);
  }
};
