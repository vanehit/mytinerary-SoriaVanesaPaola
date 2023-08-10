import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard';
import './Cities.css';

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
const Cities = () => {
  return (
    <>
      <Container>
        <h2>Cities</h2>
        <Row>
          {cities.map((city, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <CityCard cityName={city.name} imageUrl={city.imageUrl} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cities;