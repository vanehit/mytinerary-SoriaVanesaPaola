import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';


const FooterNavbar = () => {
  return (
    <Navbar expand="lg">
      <Nav className="ms-auto">
        <Anchor to="/" className="nav-itemFooter" as={Anchor}>
          Home
        </Anchor>
        <Anchor to="/cities" className="nav-itemFooter" as={Anchor}>
          Cities
        </Anchor>
      </Nav>
      <Anchor to="/login" className="btn btn-login">
        <PersonFill /> Log In
      </Anchor>
    </Navbar>
  );
};

export default FooterNavbar;
