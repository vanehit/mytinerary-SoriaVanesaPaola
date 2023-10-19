import React from 'react';
import './HeroSection.css';
import CallToAction from '../CallToAction/CallToAction';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="app-name">Find your perfect destination</h1>
            <CallToAction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
