import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityDetails } from '../../../store/actions/cityActions';
import { fetchItinerariesByCity } from '../../../store/actions/itineraryActions'; // Importa la acción para buscar itinerarios por ciudad
import './CityDetails.css'; 




const CityDetail = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.cityDetails);

  useEffect(() => {
    if (cityId) {
      dispatch(fetchCityDetails(cityId));
      dispatch(fetchItinerariesByCity(cityId));
    }
  }, [cityId, dispatch]);

  const imageUrl = city ? city.imageUrl : '';
    console.log(imageUrl);
  const cityName = city ? city.name : '';
  const cityDescription = city ? city.description : '';

  return (
    <div className="city-detail">
      <div
          className="city-detail-background"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
        <div className="main-content">
          <div className="city-detail-overlay">
            <div className="city-detail-overlay-content">
              <h2>{cityName}</h2>
              <p>{cityDescription}</p>
              <Anchor to={`/itineraries/city/${cityId}`}>
                <Button className="btn-primary">Show Itinerary</Button>
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
