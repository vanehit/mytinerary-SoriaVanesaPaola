import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
    monthOfBirth: '',
    photo: '',
    country: '',
    contactByEmail: false,
  });

  const [countries, setCountries] = useState([]); // Estado para almacenar la lista de países

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama a la acción de registro
      await dispatch(registerUser(formData));
  
      if (isAuthenticated) {
        // Si el registro es exitoso, redirige a la página principal
        navigate('/'); // Utiliza navigate para redirigir
      }
    } catch (error) {
      // Maneja errores aquí, por ejemplo, muestra un mensaje de error al usuario
      console.error("Error user:", error);
    }
  };

  // Función para obtener la lista de países desde la API
  const fetchCountries = async () => {

    console.log(fetchCountries)
    try {
      const response = await fetch('https://restcountries.com/v3.1/all'); // Cambiamos la URL a restcountries.com
      const data = await response.json();
      setCountries(data); // Almacenamos la lista de países en el estado
    } catch (error) {
      console.error("Error fetching contries:", error);
    }
    
  };

  useEffect(() => {
    // Llamamos a la función para obtener la lista de países cuando se monta el componente
    fetchCountries();
  }, []);




  return (
    <>
      <div className="background-image"></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Register</h2>
            <p className="text-center">Already have an account? <Anchor to="/login">Login</Anchor></p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="inputLastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <div className="row">
                  <div className="col">
                    <DatePicker
                      selected={formData.monthOfBirth}
                      onChange={(date) => setFormData({ ...formData, monthOfBirth: date })}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      required
                      placeholderText="Select Month"
                    />
                  </div>
                </div>
                <div className="mb-3">
                <label htmlFor="inputPhoto" className="form-label">Photo</label>
                <input
                  type="file"
                  className="form-control"
                  id="inputPhoto"
                  name="photo"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="inputCountryRegion" className="form-label">Country/Region</label>
                <select
                  className="form-select"
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
              <p>
                By clicking "Create Account," you agree to our Terms of Service and Privacy Policy.
              </p>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
