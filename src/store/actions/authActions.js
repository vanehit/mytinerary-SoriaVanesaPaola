import axios from 'axios';

export const registerUser = (formData) => async (dispatch) => {
  try {
    // Hacer una solicitud al servidor para obtener la variable de entorno
    const responseEnv = await axios.get('/get-secret-key'); // Asegúrate de definir esta ruta en tu servidor
    const secretKey = responseEnv.data.secretKey;

    // Luego, realizar la solicitud de registro con la variable de entorno
    const responseRegister = await axios.post('/auth/register', formData);

    // Si el registro es exitoso, puedes almacenar el token en el estado de Redux o en las cookies 
    dispatch({ type: 'REGISTER_SUCCESS', payload: responseRegister.data.token });
  } catch (error) {
    // Manejar errores de registro, por ejemplo, dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    // Hacer una solicitud al servidor para obtener la variable de entorno
    const responseEnv = await axios.get('/get-secret-key'); // Asegúrate de definir esta ruta en tu servidor
    const secretKey = responseEnv.data.secretKey;

    // Luego, realizar la solicitud de inicio de sesión con la variable de entorno
    const responseLogin = await axios.post('/auth/login', formData);

    // Si el inicio de sesión es exitoso, puedes almacenar el token en el estado de Redux o en las cookies si lo deseas
    dispatch({ type: 'LOGIN_SUCCESS', payload: responseLogin.data.token });
  } catch (error) {
    // Manejar errores de inicio de sesión, por ejemplo, dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};
