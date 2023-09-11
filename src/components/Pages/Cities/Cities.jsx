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
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.cities);
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  useEffect(() => {
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [search, cities]);

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
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
        <button className="search-button">
          <BsSearch />
        </button>
      </div>
      <Row>
        {filteredCities && filteredCities.length > 0 ? (
          filteredCities.map((city, idx) => (
            <Col key={city._id} xs={12} sm={6} md={4} lg={3}>
              <Anchor to={`/cities/${city._id}`}>
                <CityCard
                  cityName={city.name}
                  imageUrl={`${imageUrlPrefix}${city.imageUrl}`}
                  country={city.location.country}
                  city={city.location.city}
                  onClick={() => handleCityClick(city)}
                />
              </Anchor>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No cities found.</p>
          </Col>
        )}
      </Row>
      {selectedCity && <Itineraries cityId={selectedCity._id} />}
    </Container>
  );
};

export default Cities;
