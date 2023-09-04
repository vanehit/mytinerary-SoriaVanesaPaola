import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard';
import './Cities.css';
import { Link as Anchor } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Itineraries from './Itineraries';
import { fetchCities } from '../../../store/actions/cityActions'; 

const Cities = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.filteredCities);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    dispatch(fetchCities()); // Llama a la acción para cargar las ciudades
  }, [dispatch]);

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
     
      dispatch(searchCities(search));
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
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
            <Anchor to={`/city/${city._id}`}>
              <CityCard
                cityName={city.name}
                imageUrl={`${imageUrlPrefix}${city.imageUrl}`}
                country={city.location.country}
                city={city.location.city}
                onClick={() => handleCityClick(city)}
              />
            </Anchor>
          </Col>
        ))}
      </Row>
       {/* Mostramos Itineraries si una ciudad está seleccionada */}
       {selectedCity && <Itineraries cityId={selectedCity._id} />}
    </Container>
  );
};

export default Cities;
