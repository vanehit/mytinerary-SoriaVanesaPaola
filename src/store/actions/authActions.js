import axios from 'axios';

//  registro de usuario
export const registerUser = (formData) => async (dispatch) => {
    try {
      const response = await axios.post('/auth/register', formData); // URL según mi servidor
      // Si el registro es exitoso, puedes almacenar el token en el estado de Redux o en las cookies 
      dispatch({ type: 'LOGOUT', payload: response.data.token });
    } catch (error) {
      // Manejar errores de registro, por ejemplo, dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  };
  
  export const loginUser = (formData) => async (dispatch) => {
    try {
      const response = await axios.post('/auth/login', formData); 
      // Si el inicio de sesión es exitoso, puedes almacenar el token en el estado de Redux o en las cookies si lo deseas
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.token });
    } catch (error) {
      // Manejar errores de inicio de sesión, por ejemplo, dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

