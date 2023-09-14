import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchItinerariesByCity,  updateItinerary } from '../../../store/actions/itineraryActions';
import { FaMoneyBillAlt } from 'react-icons/fa';
import './Itineraries.css';


const Itineraries = ({ cityId }) => {
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itinerary.itineraries);
  const [showMore, setShowMore] = useState(false);

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
    <>
      <Container className="mt-5">
      <h2 className="text-center">Itineraries for the selected city</h2>
      <Row className="justify-content-center">
        {itineraries.length === 0 ? (
          <p className="text-center">No hay itinerarios disponibles para esta ciudad.</p>
        ) : (
          itineraries.map((itinerary, idx) => (
            <Col >
              <Card className="itinerary-card mb-4">
                <Card.Img variant="top" src={itinerary.imageUrl} className="card-image" />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="card-title">{itinerary.title}</Card.Title>
                  <p className="description text-center">{itinerary.description}</p>
                  <div className="itinerary-details text-center">
                    <p>
                      Price: 
                      {[...Array(3)].map((_, index) => (
                        <FaMoneyBillAlt key={index} className="money-icon" />
                      ))}
                    </p>
                    <p>Duration: {itinerary.duration} hours</p>
                    <p>Hashtags: {itinerary.hashtags.join(', ')}</p>
                  </div>
                  <div className="d-flex justify-content-between w-100">
                    <Button
                      variant="primary"
                      onClick={() =>
                        dispatch(updateItinerary(itinerary._id, { likes: itinerary.likes + 1 }))
                      }
                    >
                      Like
                    </Button>
                    <Button variant="secondary" onClick={() => setShowMore(!showMore)}>
                      View More
                    </Button>
                  </div>
                  {showMore && (
                    <div className="under-construction mt-2 text-center">
                      Under Construction: Activities and Comments will be here.
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
    </>
  );
};

export default Itineraries;
