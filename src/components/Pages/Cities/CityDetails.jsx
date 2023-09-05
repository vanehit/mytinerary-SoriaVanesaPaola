import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityDetails } from '../../../store/actions/cityActions';
import Itineraries from './Itineraries';

const CityDetail = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.cityDetails);

  useEffect(() => {
    dispatch(fetchCityDetails(cityId));
  }, [cityId, dispatch]);

  const imageUrl = city ? city.imageUrl : ''; 

  const [activeTab, setActiveTab] = useState('details');

  return (
    <Container className="city-detail">
      {imageUrl && (
        <div className="city-detail-background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      )}
      <div className="city-detail-overlay">
        <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
          <Tab eventKey="details" title="Details">
            {city && (
              <p>Name: {city.name}</p>
            )}
          </Tab>
          <Tab eventKey="itineraries" title="Itineraries">
            {city && (
              <Itineraries cityId={city._id} />
            )}
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default CityDetail;
