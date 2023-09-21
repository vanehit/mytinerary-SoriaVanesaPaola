import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';
import './CityCarousel.css';

const CityCarousel = () => {
  const [cities, setCities] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Realizamos la solicitud HTTP para obtener los datos desde el servidor
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

  // Divide las ciudades en grupos de 4 para mostrar 4 imágenes por vista
  const citiesGroups = cities.reduce((acc, city, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(city);
    return acc;
  }, []);

  return (
    <div className="city-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {citiesGroups.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="text-center">
              <h3 className="carousel-title my-4">Popular Mytineraries</h3>
            </div>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {group.map((city) => (
                <Col key={city.name} xs={12} sm={6} md={4} lg={3}>
                  <div className="carousel-item">
                    <CityCard cityName={city.name} imageUrl={city.imageUrl} />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CityCarousel;
