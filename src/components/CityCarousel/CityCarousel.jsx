import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';
import { useSelector, useDispatch } from 'react-redux'; // Importa useSelector y useDispatch
import { fetchCities } from '../../store/actions/cityActions'; // Importa la acción para cargar las ciudades
import './CityCarousel.css';

const CityCarousel = () => {
  const cities = useSelector((state) => state.city.cities); // Extrae los datos de las ciudades desde el estado de Redux
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch(); // Obtiene la función de despacho

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Utiliza la acción para cargar las ciudades desde el servidor
    dispatch(fetchCities());
  }, [dispatch]);

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
