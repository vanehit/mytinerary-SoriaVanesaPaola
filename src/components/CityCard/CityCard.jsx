import React from 'react';
import { Card } from 'react-bootstrap';
import './CityCard.css'

const CityCard = ({ cityName, imageUrl }) => {
  return (
    <>
      <Card className="city-card">
      <Card.Img variant="top" src={imageUrl} alt={cityName} className="img-fluid city-image" />
        <div className="city-title-overlay">
          <Card.Title className="city-title">{cityName}</Card.Title>
        </div>
     </Card>
    </>
  );
};

export default CityCard;
