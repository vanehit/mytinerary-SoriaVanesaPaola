import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { loadItineraries } from '../../../store/actions/itineraryActions';

const Itineraries = ({ cityId }) => {
  const dispatch = useDispatch();
  const itineraries = useSelector(state => state.itinerary.itineraries);

  React.useEffect(() => {
    dispatch(loadItineraries(cityId));
    
  }, [dispatch, cityId]);

  return (
    <Container>
      <h2>Itineraries for the selected city</h2>
      <Row>
        {itineraries.map((itinerary, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <div>
              <p>Author: {itinerary.author}</p>
              <p>Price: {itinerary.price}</p>
              <p>Duration: {itinerary.duration} hours</p>
              <p>Likes: {itinerary.likes}</p>
              <p>Hashtags: {itinerary.hashtags.join(', ')}</p>
              <p>Description: {itinerary.description}</p>
              {/* actualizamos el itinerario */}
              {/* <button
                onClick={() => handleUpdateItinerary(itinerary._id, { likes: itinerary.likes + 1 })}
              >
                Like
              </button> */}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Itineraries;

  