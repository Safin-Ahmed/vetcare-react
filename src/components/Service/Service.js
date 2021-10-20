import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Service = (props) => {
    const {name, description, img, id} = props.service;
    return (
        <Col>
        <Card className = "single-card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Link to = {`service/${id}`}><Button variant="success">Learn More</Button></Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;