import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchItinerariesByCity } from '../../../store/actions/itineraryActions';

const Itineraries = ({ cityId }) => {
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itinerary.itineraries);

  useEffect(() => {
    dispatch(fetchItinerariesByCity(cityId)); // Llama a la acción para cargar los itinerarios por ciudad
  }, [dispatch, cityId]);

  const handleUpdateItinerary = (itineraryId, updatedData) => {
   
     dispatch(updateItinerary(itineraryId, updatedData));
  };

  return (
    <Container>
      <h2>Itineraries for the selected city</h2>
      <Row>
        {itineraries.map((itinerary, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <div>
              {/* ... Itinerary information ... */}
              <button
                onClick={() =>
                  handleUpdateItinerary(itinerary._id, {
                    likes: itinerary.likes + 1,
                  })
                }
              >
                Like
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Itineraries;

  