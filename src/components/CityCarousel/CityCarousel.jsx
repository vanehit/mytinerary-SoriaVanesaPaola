import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';
import { useDispatch, useSelector } from 'react-redux';
import './CityCarousel.css';
import { fetchCities } from '../../store/actions/cityActions';

const CityCarousel = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.cities);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(fetchCities()); // cargamos las cities con redux
  }, [dispatch]);

  return (
    <div className="city-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {Array.from({ length: Math.ceil(cities.length / 4) }).map((_, slideIdx) => (
          <Carousel.Item key={slideIdx}>
            <Container>
              <h3 className="carousel-title my-4">Popular Mytineraries</h3>
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {cities.slice(slideIdx * 4, slideIdx * 4 + 4).map((city) => (
                  <Col key={city._id} xs={12} sm={6} md={4} lg={3}>
                    <div className="carousel-item">
                      <CityCard cityName={city.name} imageUrl={city.imageUrl} /> {/* No es necesario agregar imageUrlPrefix */}
                    </div>
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