import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import CityCard from '../../CityCard/CityCard'; 
import axios from 'axios';

const CityDetail = () => {
  const { _id } = useParams();
  //console.log("ID:", _id);
  const [city, setCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hacer la solicitud a la API para obtener los detalles de la ciudad
    axios.get(`http://localhost:5000/cities/${_id}`)
      .then(response => {
        setCity(response.data);
        setIsLoading(false); // Marca que la carga se ha completado
      })
      .catch(err => {
        console.error('Error fetching city details:', err);
        setIsLoading(false); // Marca que la carga se ha completado incluso si hay error
      });
  },[_id]);

  if (isLoading) {
    return <div>Loading...</div>; //  mensaje de carga mientras se obtienen los detalles
  }

  if (!city) {
    return <div>City not found</div>;
  }
  

  const imageUrlPrefix = '';


  const backgroundImageStyle = {
    backgroundImage: `url(http://localhost:5000${city.imageUrl})`
  };

  return (
    <Container className="city-detail">
      <div className="city-detail-background" style={backgroundImageStyle}></div>
      <CityCard
        cityName={city.name}
        imageUrl={`${imageUrlPrefix}${city.imageUrl}`}
        country={city.location.country}
        city={city.location.city}
      />
      <h3>{city.name}</h3>
    </Container>
  );
};

export default CityDetail;





