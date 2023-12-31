import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard';
import './Cities.css';
import { Link as Anchor } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';


const Cities = () => {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  const imageUrlPrefix = '';

    useEffect(() => {
      // Realizamos la solicitud GET a la API para obtener la lista de ciudades
      axios.get('http://localhost:5000/cities')
        .then(response => {
          // Manejamos la respuesta y actualizar el estado 'cities'
          setCities(response.data);
        })
        .catch(error => {
          // Manejamos los errores en caso de que ocurran
          console.error('Error fetching cities:', error);
        });
    }, []);

    const handleSearch = () => {
      const lowercaseSearch = search.toLowerCase();
      
      axios.get(`http://localhost:5000/cities?search=${lowercaseSearch}`)
        .then(response => {
          setCities(response.data);
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    };

  return (
    <Container>
      <h2>Cities</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>
      <Row>
        {cities.map((city, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <Anchor to={`/cities/${city._id}`}>
              <CityCard
                cityName={city.name}
                imageUrl={`${imageUrlPrefix}${city.imageUrl}`}
                country={city.location.country}
                city={city.location.city}
              />
            </Anchor>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;
