import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import FooterNavbar from './FooterNavbar'; 

const Footer = () => {
  return (
    <>
       <footer className='container__footer'>
        <div className="footer-content">
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

          <FooterNavbar />
          
        </div>
        <div className="footer-author">
          <p>Vanesa Paola Soria - COHORT: APP MERN 06 TT</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
