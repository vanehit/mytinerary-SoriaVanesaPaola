import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard';
import { Link as Anchor } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { fetchCities } from '../../../Redux/Slices/CitySlice';

const Cities = () => {
  const dispatch = useDispatch();
  const { cities, status, error } = useSelector((state) => state.cities);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!cities.length) {
      dispatch(fetchCities());
    }
  }, [dispatch, cities.length]);

  // Filtra ciudades localmente para mejorar rendimiento
  const filteredCities = Array.isArray(cities)
  ? cities.filter((city) => city?.title?.toLowerCase().includes(search.toLowerCase()))
  : [];

  return (
    <Container>
      <h2>Ciudades</h2>

      {/* Estado de carga y errores */}
      {status === 'loading' && <Alert variant="info">Cargando ciudades...</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar ciudades..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button">
          <BsSearch />
        </button>
      </div>

      {/* Lista de ciudades */}
      <Row>
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <Col key={city._id} xs={12} sm={6} md={4} lg={3}>
              <Anchor to={`/cities/${city._id}`}>
                <CityCard
                  title={city.title}
                  imageURL={city.imageURL} 
                  countryName={city.location?.country ?? 'País desconocido'}
                  cityDetails={city.location?.city ?? 'Ciudad desconocida'}
                />
              </Anchor>
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="info">No se encontraron ciudades que coincidan con tu búsqueda.</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Cities;
