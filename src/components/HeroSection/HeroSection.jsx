import React from 'react';
import './HeroSection.css'; // Importa el archivo de estilos

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="app-name">MyTinerary</h1>
          <p className="slogan">Find your perfect trip, designed by insiders who know and love their cities!</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;