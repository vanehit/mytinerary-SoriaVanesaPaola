import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCityDetails } from '../../../Redux/Slices/CityDetailsSlice';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const CityDetails = () => {
  const { id: cityId } = useParams();
  const dispatch = useDispatch();
  const { selectedCity, loading, error } = useSelector(state => state.cityDetails);

  useEffect(() => {
    if (!selectedCity || selectedCity._id !== cityId) {
      dispatch(fetchCityDetails(cityId));
    }
  }, [dispatch, cityId, selectedCity]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedCity?.title) return <p>No se encontró la ciudad.</p>;

  return (
    <Container className="city-details-container">
      <h2>{selectedCity.title}</h2>

      {/* Imagen con estilo Polaroid */}
      {selectedCity.imageURL && (
        <img 
          src={selectedCity.imageURL} 
          alt={selectedCity.title} 
          className="polaroid-image mb-4"
        />
      )}

      {/* Descripción de la ciudad */}
      <p>{selectedCity.description}</p>

      {/* Ubicación */}
      {selectedCity.location && (
        <p><strong>Ubicación:</strong> {selectedCity.location.city}, {selectedCity.location.country}</p>
      )}

      {/* Actividades */}
      <h3>Actividades</h3>
      <Row>
        {selectedCity.activities?.length > 0 ? (
          selectedCity.activities.map(activity => (
            <Col key={activity._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{activity.name}</Card.Title>
                  <Card.Text>{activity.description || 'Sin descripción disponible.'}</Card.Text>
                  <Button variant="primary">Más detalles</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No hay actividades disponibles para esta ciudad.</p>
          </Col>
        )}
      </Row>

      {/* Itinerarios */}
      <h3>Itinerarios</h3>
      <Row>
        {selectedCity.itineraries?.length > 0 ? (
          selectedCity.itineraries.map(itinerary => (
            <Col key={itinerary._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{itinerary.title}</Card.Title>
                  <Card.Text>{itinerary.description || 'Sin descripción disponible.'}</Card.Text>
                  <Button variant="primary">Ver itinerario</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No hay itinerarios disponibles para esta ciudad.</p>
          </Col>
        )}
      </Row>

      {/* Comentarios */}
      <h3>Comentarios</h3>
      {selectedCity.comments?.length > 0 ? (
        <ListGroup>
          {selectedCity.comments.map(comment => (
            <ListGroup.Item key={comment._id}>
              <strong>{comment.author}</strong>: {comment.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No hay comentarios disponibles para esta ciudad.</p>
      )}
    </Container>
  );
};

export default CityDetails;
