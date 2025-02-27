import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CityCard.css';

const CityCard = ({ title, imageURL, countryName, cityDetails }) => {
  console.log("Props recibidos en CityCard:", { title, imageURL, countryName, cityDetails });

  const cityText = cityDetails || 'Información no disponible';
  const countryText = countryName || 'Información no disponible';

  // Si no hay imagen, usar una por defecto
  const finalImageURL = imageURL && imageURL.trim() !== "" ? imageURL : '/assets/images/default.jpg';

  return (
    <div className="city-card-container">
      <Card className="city-card">
        <Card.Img 
          variant="top" 
          src={finalImageURL} 
          alt={title || 'Imagen de la ciudad'} 
          className="polaroid-image" // Aplica la clase Polaroid
        />
        <div className="overlay">
          <Card.Body>
            <Card.Title>{title || 'Título no disponible'}</Card.Title>
            <Card.Text>
              {`${cityText}, ${countryText}`}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

CityCard.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,  // Asegúrate de que imageURL sea opcional o tenga valor por defecto
  countryName: PropTypes.string,
  cityDetails: PropTypes.string,
};

export default CityCard;
