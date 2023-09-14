import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamamos a la acción de inicio de sesión
      await dispatch(loginUser(formData));

      // Si el inicio de sesión es exitoso, redirige a la página principal
      if (isAuthenticated) {
        // Redirigimos a la página principal
        navigate('/');
      }
    } catch (error) {
      // Manejamos errores / muestra un mensaje de error al usuario
      console.error(error);
    }
  };

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
      <footer />
    </>
  );
};

export default Login;
