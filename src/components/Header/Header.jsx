import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logoutUser, loginUser } from '../../store/actions/authActions';
import AppNavbar from '../Nabvar/Navbar';


const Header = ({ transparent }) => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  // Obtiene el estado de autenticación desde Redux
  const isAuthenticatedRedux = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Llama a la acción logoutUser cuando el usuario hace clic en "Logout"
    dispatch(logoutUser());

    // Utiliza navigate('/login') para navegar a la página de inicio de sesión
    navigate('/login');
  };

  const handleLogin = () => {
    dispatch(loginUser());
  };

  // Verifica si estás en la página de Ciudades (Cities)
  const isCitiesPage = location.pathname === '/cities';

  return (
    <div>
      <AppNavbar transparent={transparent} />
    </div>
  );
};

export default Header;
