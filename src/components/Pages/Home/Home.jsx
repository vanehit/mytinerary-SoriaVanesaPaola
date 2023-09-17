import React from 'react';
import HeroSection from '../../HeroSection/HeroSection'; // Agrega tu HeroSection
import CityCarousel from '../../CityCarousel/CityCarousel';
import CallToAction from '../../CallToAction/CallToAction';



const Home = () => {
  return (
    <>
      <HeroSection /> 
      <CityCarousel />
      <CallToAction />
    </>
  );
};

export default Home;
