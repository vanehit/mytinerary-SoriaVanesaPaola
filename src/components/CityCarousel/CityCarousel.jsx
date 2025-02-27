import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CityCard from '../CityCard/CityCard';
import axios from 'axios';

const CityCarousel = () => {
  const [cities, setCities] = useState([]); // Estado para almacenar las ciudades
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null); // Usamos un useRef para almacenar el intervalo

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Obtener las ciudades desde la API cuando el componente se monte
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cities'); // Cambia la URL según tu backend
        setCities(response.data); // Guarda las ciudades en el estado
      } catch (error) {
        console.error('Error al obtener las ciudades:', error);
      }
    };

    fetchCities();
  }, []);

  // Ayuda al carousel a pasar cada 5 segundos, sin causar un loop infinito
  useEffect(() => {
    // Evitar que el intervalo se configure más de una vez
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const nextIndex = (index + 1) % Math.ceil(cities.length / 4);
      setIndex(nextIndex);
    }, 5000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalRef.current);
  }, [cities.length]); // Solo depende de la cantidad de ciudades

  return (
    <div className="city-carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {Array.from({ length: Math.ceil(cities.length / 4) }).map((_, slideIdx) => (
          <Carousel.Item key={slideIdx}>
            <Container>
              <h3 className="my-4">Popular Itineraries</h3>
              <Row xs={1} sm={2} md={2} lg={2} className="g-4"> 
                {/* Cuatro tarjetas por slide */}
                {cities.slice(slideIdx * 4, slideIdx * 4 + 4).map((city) => (
                  <Col key={city._id} xs={12} sm={6} md={6} lg={6}>
                    <CityCard 
                      title={city.title} 
                      imageURL={city.imageURL} 
                      countryName={city.location ? city.location.country : 'Unknown Country'} // Validación
                      cityDetails={city.location ? city.location.city : 'Unknown City'}  // Validación
                    />
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
