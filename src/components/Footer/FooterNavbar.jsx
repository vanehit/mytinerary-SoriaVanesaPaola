import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor } from 'react-router-dom';
import './Footer.css';

const FooterNavbar = () => {
  return (
    <div className="footer-navbar">
      <div className="nav-links">
        <Anchor to="/" className="nav-itemFooter" as={Anchor}>
          Home
        </Anchor>
        <Anchor to="/cities" className="nav-itemFooter" as={Anchor}>
          Cities
        </Anchor>
      </div>
      <Anchor to="/login" className="btn btn-login">
        <PersonFill /> Log In
      </Anchor>
    </div>
  );
};

export default FooterNavbar;
