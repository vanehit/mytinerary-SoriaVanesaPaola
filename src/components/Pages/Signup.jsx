import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { Link as Anchor } from 'react-router-dom';
import './Signup.css';
import Swal from 'sweetalert2';

const Signup = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = {};

  if (!formData.username.trim()) {
    validationErrors.username = 'Username is required';
  }

  if (!formData.email.trim()) {
    validationErrors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    validationErrors.email = 'Invalid email format';
  }

  if (!formData.password) {
    validationErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    validationErrors.password = 'Password must be at least 6 characters long';
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSuccess(''); // Limpiar el mensaje de éxito
    return;
  }

  try {
    await dispatch(registerUser(formData));

    if (isAuthenticated) {
      setSuccess('Registration successful');
      setErrors(''); // Limpiar el mensaje de error

      // Redireccionar después de un breve retraso
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redireccionar después de 2 segundos
    }
  } catch (error) {
    setErrors('Error registering user');
    setSuccess(''); // Limpiar el mensaje de éxito
    console.error('Error user:', error);
  }
};


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
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
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="inputUsername"
                  name="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="Username"
                  required
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="inputEmail"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email"
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="inputPassword"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Password"
                  required
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
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
    </>
  );
};

export default Signup;
