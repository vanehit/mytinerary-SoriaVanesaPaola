import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
      <>
        <footer className="transparent-footer">
            <div className="container__footer">
                <div className="footer-social">
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                </div>
                <nav className="navbar navbar-expand-lg">
                <div className="container">
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
                    <Anchor className="btn" to="/SignIn">
                    <PersonFill /> Sign In
                    </Anchor>
                </div>
                </nav>
                <div className="footer-info">
                <p>Vanesa Paola Soria - COHORT: APP MERN 06 TT</p>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;

