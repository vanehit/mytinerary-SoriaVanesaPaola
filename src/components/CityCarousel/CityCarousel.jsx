import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';
import axios from 'axios';

const CityCarousel = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Ayuda al carousel pasar cada 5 seg
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % Math.ceil(cities.length / 4);
      setIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    // Realiza una solicitud para obtener las ciudades desde tu servidor
    axios.get('http://localhost:5000/cities')
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
      });
  }, []);

  return (
    <div className="city-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {Array.from({ length: Math.ceil(cities.length / 4) }).map((_, slideIdx) => (
          <Carousel.Item key={slideIdx}>
            <Container>
              <h3 className="my-4">Popular Mytineraries</h3>
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {cities.slice(slideIdx * 4, slideIdx * 4 + 4).map((city) => (
                  <Col key={city._id} xs={12} sm={6} md={4} lg={3}>
                    <CityCard cityName={city.name} imageUrl={city.imageUrl} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CityCarousel;
