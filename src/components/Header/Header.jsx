import React, { useState } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
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
        <Anchor className="btn" to="/login">
          <PersonFill /> Log In
        </Anchor>
      </Container>
    </Navbar>
  );
};

export default Header;
