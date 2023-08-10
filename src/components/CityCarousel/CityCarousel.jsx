import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';

  const cities = [
  { name: 'New York', imageUrl: '/public/images/newYork.jpg' },
  { name: 'Paris', imageUrl: '/public/images/paris.jpg' },
  { name: 'Tokyo', imageUrl: '/public/images/tokio.jpg' },
  { name: 'London', imageUrl: '/public/images/london.jpg' },
  { name: 'Sydney', imageUrl: '/public/images/sydney.jpg' },
  { name: 'Rome', imageUrl: '/public/images/roma.jpg' },
  { name: 'San Francisco', imageUrl: '/public/images/sanFrancisco.jpg' },
  { name: 'Buenos Aires', imageUrl: '/public/images/buenosAires.jpg' },
  { name: 'Dubai', imageUrl: '/public/images/dubai.jpg' },
  { name: 'Berlin', imageUrl: '/public/images/berlin.jpg' },
  { name: 'Cape Town', imageUrl: '/public/images/capeTown.jpg' },
  { name: 'Moscow', imageUrl: '/public/images/moscow.jpg' },
];
//console.log(cities)

const CityCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // ayuda al carousel pasar cada 5 seg
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % Math.ceil(cities.length / 4);
      setIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="city-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {Array.from({ length: Math.ceil(cities.length / 4) }).map((_, slideIdx) => (
          <Carousel.Item key={slideIdx}>
            <Container>
              <h3 className="my-4">Popular Mytineraries</h3>
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {cities.slice(slideIdx * 4, slideIdx * 4 + 4).map((city) => (
                  <Col key={city.name} xs={12} sm={6} md={4} lg={3}>
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

