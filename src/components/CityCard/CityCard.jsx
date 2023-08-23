import React from 'react';
import { Card } from 'react-bootstrap';
import './CityCard.css';

const CityCard = ({ cityName, imageUrl, country, city }) => {
  return (
    <div className="city-card-container">
      <Card className="city-card">
        <Card.Img variant="top" src={imageUrl} />
        <div className="overlay">
          <Card.Body>
            <Card.Title>{cityName}</Card.Title>
            <Card.Text>
              {`${city}, ${country}`}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default CityCard;
