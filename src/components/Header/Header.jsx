

import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Anchor className="navbar-brand" to="/">
            MyTinerary
          </Anchor>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Anchor className="nav-link" to="/">
                  Home
                </Anchor>
              </li>
              <li className="nav-item">
                <Anchor className="nav-link" to="/cities">
                  Cities
                </Anchor>
              </li>
            </ul>
          </div>
          <Anchor className="btn" to="/login">
            <PersonFill /> Log In
          </Anchor>
        </div>
      </nav>
    </>
  );
};

export default Header;
