import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Signup.css';

const Signup = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  // Manejamos  errores y éxito
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.success);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    // Actualizaamos el estado del formulario
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    await dispatch(registerUser(formData));

    if (isAuthenticated) {
      // Muestramos la alerta de éxito utilizando SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered.',
      });

      // Redireccionamos a la página de inicio después de un tiempo
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  } catch (err) {
    console.error('Error registering user:', err);
  }
};

  return (
    <div className="signup-container">
      <div className="background-image"></div>
      <div className="row justify-content-center">
        <div className="col-md-6 login-form">
          <h2 className="text-center">Register</h2>
          <p className="text-center">
            Already have an account? <Anchor to="/login">Login</Anchor>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
