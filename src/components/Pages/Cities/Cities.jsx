import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard';
import './Cities.css';
import { Link as Anchor } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { setCities } from '../../../store/reducers/cityReducers';
import axios from 'axios';



    const Cities = () => {
    const [search, setSearch] = useState(""); 
    const dispatch = useDispatch(); // Obtenemos la función dispatch de Redux
    const cities = useSelector(state => state.city.filteredCities); // Obtenemos el estado del store mediante useSelector
  
    useEffect(() => {
      axios.get('http://localhost:5000/cities')
        .then(response => {
          // Usamos la acción setCities para almacenar las ciudades en el store
          dispatch(setCities(response.data));
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    }, [dispatch]);
  
    const handleEnterSearch = (e) => {
      if (e.key === 'Enter') {
        axios.get(`http://localhost:5000/cities?search=${search}`)
          .then(response => {
            // Usamos la acción setCities para almacenar las ciudades filtradas en el store
            dispatch(setCities(response.data));
          })
          .catch(error => {
            console.error('Error fetching filtered cities:', error);
          });
      }
    };

    const imageUrlPrefix = '';

  return (
    <Container>
      <h2>Cities</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleEnterSearch}
        />
        <button className="search-button ">
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
