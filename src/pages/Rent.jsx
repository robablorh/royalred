import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'

const Rent = () => {
  const [rents, setRents] = useState([]);

  const fetchRent = async () => {
    try {
      const response = await axios.get("http://localhost:8000/rent");
      const data = await response.data;
      setRents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRent();
  }, []);

  return (
    <div>
      <h1>Rent Listings</h1>
      <Container>
        <Row>
          {rents.map((rent) => (
            <Col key={rent.id} xs={12} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={rent.url} alt="rentImage" />
                <Card.Body>
              
                  <Card.Text>
                    <p>Location: {rent.location}</p>
                    <p>Type: {rent.type}</p>
                    <p>Rooms: {rent.rooms}</p>
                    <Link to={`/rent/${rent.id}`}>See more</Link>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Rent;



