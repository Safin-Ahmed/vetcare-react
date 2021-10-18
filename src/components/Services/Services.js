import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const services = useServices();
    return (
        <div className = "services-section text-center">
            <Container>
                <h1 className = "fw-bold">OUR <span className = "text-success">SERVICES</span></h1>
                <p>Choose from our wide range of services for your pet. We will take a good care of your baby</p>
                <Row xs={1} md={3} className="g-4 mt-4">
                {
                    services.map(service => <Service id = {service.id} service = {service}></Service>)
                }
            </Row>
            </Container>
            
        </div>
    );
};

export default Services;