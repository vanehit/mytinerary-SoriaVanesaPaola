import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthContext";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { user, signIn, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/auth/signin", formData);
      signIn(response.data);
      navigate("/");
    } catch (error) {
      setError(error.response?.data.message || "Error en el inicio de sesión");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">{user ? `Bienvenido, ${user.name}` : "Iniciar sesión"}</h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        {!user ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
            </form>
            <p className="mt-3 text-center">
              ¿No tienes cuenta? <Link to="/signup">Regístrate aquí</Link>
            </p>
          </>
        ) : (
          <button onClick={signOut} className="btn btn-danger w-100">Cerrar sesión</button>
        )}
      </div>
    </div>
  );
};

export default SignIn;