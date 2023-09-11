import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchItinerariesByCity, updateItinerary } from '../../../store/actions/itineraryActions';
import './Itineraries.css';



const Itineraries =  ({ cityId }) => {
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itinerary.itineraries);

  useEffect(() => {
    console.log("Fetching itineraries for cityId:", cityId); 
    dispatch(fetchItinerariesByCity(cityId))
      .then((data) => {
        console.log("Fetched itineraries data:", data); 
      })
      .catch((error) => {
        console.error("Error fetching itineraries:", error);
      });
  }, [dispatch, cityId]);
  

  return (
    <Container>
      <h2>Itineraries for the selected city</h2>
      <Row>
        {Array.isArray(itineraries) &&
          itineraries.map((itinerary, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                <div>
                  <h3 className="inline-elements">{itinerary.title}</h3>
                  <p className="inline-elements">{itinerary.description}</p>
                  <p className="inline-elements">Price: {itinerary.price}</p>
                  <p className="inline-elements">Duration: {itinerary.duration} hours</p>
                  <p className="inline-elements">Hashtags: {itinerary.hashtags.join(', ')}</p>
                  <button
                    className="inline-elements"
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
