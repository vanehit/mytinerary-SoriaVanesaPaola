import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard';
import './Cities.css';
import axios from 'axios';


const Cities = () => {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axios.get('/api/cities');
        setCities(response.data); 
      } catch (err) {
        console.error('Error fetching cities:', err);
      }
    };

    fetchData();
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h2>Cities</h2>
      <input
        type="text"
        placeholder="Search cities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Row>
        {filteredCities.map((city, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <CityCard
              cityName={city.name}
              imageUrl={city.imageUrl}
              country={city.location.country}
              city={city.location.city}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;
