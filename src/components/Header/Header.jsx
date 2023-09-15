import React, { useState, useEffect } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor, useLocation } from 'react-router-dom'; // Importa useLocation para obtener la ruta actual
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Header.css'

const Header = ({ transparent }) => {
  const [scrolling, setScrolling] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // Obtiene la ruta actual

  // Obtiene el estado de autenticación para que el boton cambie
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
          <Anchor className={`btn btn-login ${isAuthenticated ? 'btn-authenticated' : ''}`} to="/login">
            <PersonFill /> Log In
          </Anchor>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
