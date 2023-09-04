import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CityCard from '../../CityCard/CityCard';
import { fetchCityDetails } from '../../../store/actions/cityActions';
import Itineraries from './Itineraries'; 

const CityDetail = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.cityDetails);

  useEffect(() => {
    dispatch(fetchCityDetails(cityId)); // Llama a la acción para cargar los detalles de la ciudad por ID
  }, [cityId, dispatch]);

  const imageUrlPrefix = '';

  const [activeTab, setActiveTab] = useState('details'); // Agregado useState

  return (
    <Container className="city-detail">
      <div className="city-detail-background"></div>
      <div className="city-detail-overlay">
        <CityCard
          cityName={city.name}
          imageUrl={`${imageUrlPrefix}${city.imageUrl}`}
          country={city.location.country}
          city={city.location.city}
        />
        <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
          <Tab eventKey="details" title="Details">
            <p>Name: {city.name}</p>
            {/* ... Otros detalles de la ciudad ... */}
          </Tab>
          <Tab eventKey="itineraries" title="Itineraries">
            <Itineraries cityId={city._id} />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default CityDetail;
