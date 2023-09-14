import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link as Anchor } from 'react-router-dom'; 
import { FaGoogle } from 'react-icons/fa';
import './Signup.css';
import Swal from 'sweetalert2';



const Signup = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    photoURL: '',
    country: '',
    contactByEmail: false,
  });

  const [countries, setCountries] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, photo: file, photoURL: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.lastName) {
      validationErrors.lastName = 'Last Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (!formData.photoURL) {
      validationErrors.photoURL = 'Photo URL is required';
    }

    if (!formData.country) {
      validationErrors.country = 'Country is required';
    }


    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores de validación, actualiza el estado de 'errors'
      setErrors(validationErrors);
      return; // detenemos el proceso de registro si hay errores
    }

    try {
      // Registramos al usuario utilizando la acción 'registerUser' del Redux
      await dispatch(registerUser(formData));

      if (isAuthenticated) {
        //alerta de usuario creado
        Swal.fire({
          icon: 'success',
          title: 'Registration successfu',
          text: 'You are now registered on our platform.',
        });

        // Redirigimos al usuario a la página principal si el registro es exitoso
        navigate('/');
      }
    } catch (error) {
      console.error('Error user:', error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleGoogleRegister = () => {
    // Agrega la lógica para el registro con Google aquí
  };

  return (
    <>
      <div className="background-image"></div>
      <div className="signup-container">
        <div className="row justify-content-center">
          <div className="col-md-6 signup-form">
            <h2 className="text-center">Register</h2>
            <p className="text-center">
              Already have an account? <Anchor to="/login">Login</Anchor>
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                  <div className="col">
                    <label htmlFor="inputName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="inputName"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="col">
                    <label htmlFor="inputLastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.lastName ? 'is-invalid' : ''
                      }`}
                      id="inputLastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      required
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="mb-3 row align-items-center">
                  <div className="col-2">
                    <label htmlFor="inputPhoto" className="form-label">
                      Photo
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      type="file"
                      className="form-control"
                      id="inputPhoto"
                      name="photo"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                    />
                  </div>
                  <div className="col-4">
                    {formData.photoURL && (
                      <img
                        src={formData.photoURL}
                        alt="Preview"
                        className="img-thumbnail"
                        style={{ maxWidth: '100px' }}
                      />
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="inputCountry" className="form-label">
                    Country/Region
                  </label>
                  <select
                    className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                    id="inputCountry"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose a Country</option>
                    {countries.map((country) => (
                      <option key={country.name.common} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
                  )}
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="inputContactByEmail"
                    name="contactByEmail"
                    checked={formData.contactByEmail}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="inputContactByEmail">
                    Please contact me via email
                  </label>
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </div>
                </form>
            <div className="text-center">
              <button type="button" className="btn btn-danger" onClick={handleGoogleRegister}>
                <FaGoogle className="mr-2" />
                Register with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
