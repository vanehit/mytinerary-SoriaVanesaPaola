import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="custom-footer">
        <div className="container mx-auto">
          <nav className="flex justify-center mb-4">
            <a href="/">Home</a>
            <a href="/cities">Cities</a>
          </nav>
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
        
        <p className="text-center mt-4">
          Vanesa Paola Soria - COHORT: APP MERN 06 TT
        </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
