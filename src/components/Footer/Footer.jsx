import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Importa el archivo de estilos

const Footer = () => {
  return (
      <>
        <footer className="footer">
            <div className="container__footer">
                <div className="footer-info">
                <p>Vanesa Paola Soria</p>
                <p>COHORT: APP MERN 06 TT </p>
                </div>
                <div className="footer-social">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;