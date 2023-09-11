import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    countryRegion: '',
  });

  const [countries, setCountries] = useState([]); //aca vamos a almacenar los paises

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama a la acción de registro
      await dispatch(loginUser(formData));

      // Si el inicio de sesión es exitoso, redirige a la página principal
      if (isAuthenticated) {
        // Almacena el token en el almacenamiento local
        localStorage.setItem('token', 'your-secret-key'); // token recibido desde el servidor

        // Redirige a la página principal
        navigate('/');
      }
    } catch (error) {
      // Maneja errores aquí, por ejemplo, muestra un mensaje de error al usuario
      console.error(error);
    }
  }

   // Función para obtener la lista de países desde la API
   const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await response.json();
      setCountries(data); // Almacenamos la lista de países en el estado
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Llamamos a la función para obtener la lista de países cuando se monta el componente
    fetchCountries();
  }, []);


  
return (
  <>
    <div className="background-image"></div>
    <div className="login-container">
      <div className="row justify-content-center">
        <div className="col-md-6 login-form">
          <h2 className="text-center">Sign In</h2>
          <p className="text-center">
            New User? <Anchor to="/signup">Create Account</Anchor>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Enter your email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Continue</button>
            </div>
          </form>
          <hr />
          <p className="text-center">Or continue with</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-primary me-2">Google</button>
            <button className="btn btn-outline-primary">Facebook</button>
          </div>
        </div>
      </div>
    </div>

  </>
  );
};

export default Login;
