import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard'; 
import axios from 'axios';

const CityDetail = () => {
  const { cityId } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    // Hacer la solicitud a la API para obtener los detalles de la ciudad
    axios.get(`/api/cities/${cityId}`)
      .then(response => setCity(response.data))
      .catch(err => console.error('Error fetching city details:', err));
  }, [cityId]);

  if (!city) {
    return <div>City not found</div>;
  }
  return (
    <Container>
      <CityCard
        cityName={city.name}
        imageUrl={city.imageUrl}
        country={city.location.country}
        city={city.location.city}
      />
      <h3>{city.name}</h3>
    </Container>
  );
};

export default CityDetail;
