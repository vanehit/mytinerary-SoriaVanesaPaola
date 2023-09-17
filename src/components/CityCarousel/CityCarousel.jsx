import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';
import './CityCarousel.css';

const CityCarousel = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener los datos desde tu servidor
    fetch('http://localhost:5000/cities')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data from server:', data);
        setCities(data);
      })
      .catch((error) => console.error('Error fetching cities:', error));
  }, []);

  return (
    <div className="city-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {cities.map((city) => (
          <Carousel.Item key={city.name}>
            <Container>
              <h3 className="carousel-title my-4">Popular Mytineraries</h3>
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className="carousel-item">
                    <CityCard cityName={city.name} imageUrl={city.imageUrl} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CityCarousel;
