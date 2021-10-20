import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../images/not-found.jpg';

const NotFound = () => {
    return (
      <Container className = "text-center py-5">
            <img className = "img-fluid w-75" src={notFound} alt="" /> 
      </Container>
    );
};

export default NotFound;