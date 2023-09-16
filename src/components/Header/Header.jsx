import React, { useState, useEffect } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, loginUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = ({ transparent }) => {
  const [scrolling, setScrolling] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
    <>
      <Navbar className={`navbar ${scrolling || isCitiesPage || transparent ? 'navbar-scrolled' : ''}`} expand="lg">
        <Container>
          <Anchor className="navbar-brand" to="/">
            MyTinerary
          </Anchor>
          <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbarNav" className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
            <Nav className="ms-auto">
              <Anchor to="/" className="nav-item" as={Anchor}>
                Home
              </Anchor>
              <Anchor to="/cities" className={`nav-item ${isCitiesPage ? 'nav-item-cities' : ''}`} as={Anchor}>
                Cities
              </Anchor>
            </Nav>
          </Navbar.Collapse>
          {isAuthenticatedRedux ? (
            // Si el usuario está autenticado, muestra un botón "Logout" con el enlace a la página de cierre de sesión
            <Anchor to="/" className="btn btn-logout btn-green" onClick={handleLogout}>
              <PersonFill /> Log Out
            </Anchor>
          ) : (
            // Si el usuario no está autenticado, muestra un botón "Log In" con el enlace a la página de inicio de sesión
            <Anchor to="/login" className="btn btn-login btn-orange" onClick={handleLogin}>
              <PersonFill /> Log In
            </Anchor>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
