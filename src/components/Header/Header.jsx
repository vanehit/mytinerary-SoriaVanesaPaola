import React, { useState, useEffect } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Si hay usuario, guardarlo en el estado
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Eliminar usuario del localStorage
    setUser(null);
  };

  return (
    <Navbar className="transparent-navbar" expand="lg">
      <Container>
        <Anchor className="navbar-brand" to="/">
          MyTinerary
        </Anchor>
        <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarNav" className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <Nav className="ms-auto">
            <Nav.Link as={Anchor} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Anchor} to="/cities">
              Cities
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Mostrar el botón según si el usuario está logueado o no */}
        {user ? (
          <Button className="btn btn-success" onClick={handleLogout}>
            <PersonFill /> Logout
          </Button>
        ) : (
          <Anchor className="btn btn-primary" to="/SignIn">
            <PersonFill /> Sign In
          </Anchor>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
