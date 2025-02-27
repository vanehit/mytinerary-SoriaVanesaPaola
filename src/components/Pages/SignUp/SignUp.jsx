import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom"; // Agregado Link
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthContext";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:5000/auth/signup", formData);
      setSuccess(true);
      setFormData({ name: "", lastName: "", email: "", password: "" });
      signIn(response.data);
      navigate("/");
    } catch (error) {
      setError(error.response?.data.message || "Error en el registro");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Registrarse</h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}
        {success && <div className="alert alert-success text-center">Registro exitoso. Redirigiendo...</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        </form>
        <p className="mt-3 text-center">
          ¿Ya tienes una cuenta? <Link to="/signin">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
