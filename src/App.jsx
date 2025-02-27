import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Cities from './components/Pages/Cities/Cities';
import CityDetail from './components/Pages/Cities/CityDetails';
import SignIn from './components/Pages/SignIn/SignIn';
import SignUp from './components/Pages/SignUp/SignUp';
import { useEffect, useState } from 'react';
import { AuthProvider } from './components/AuthProvider/AuthContext';

// Función para obtener el usuario logueado desde localStorage
const getUser = () => JSON.parse(localStorage.getItem('user'));

// Componente para proteger rutas
const ProtectedRoute = ({ element }) => {
  const user = getUser();
  return user ? element : <Navigate to="/signin" />;
};

// Componente para evitar que usuarios logueados accedan a SignIn/SignUp
const AuthRoute = ({ element }) => {
  const user = getUser();
  return user ? <Navigate to="/" /> : element;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<CityDetail />} />

            {/* Rutas de autenticación con redirección */}
            <Route path="/signin" element={<AuthRoute element={<SignIn />} />} />
            <Route path="/signup" element={<AuthRoute element={<SignUp />} />} />

            {/* Ejemplo de ruta protegida (solo accesible para usuarios logueados) */}
            <Route path="/dashboard" element={<ProtectedRoute element={<h2>Dashboard</h2>} />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
