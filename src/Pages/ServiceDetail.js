import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const services = useServices();
    const detailedService = services.find(service => service.id === parseInt(serviceId));
    const {id, description, img, title, name} = detailedService;
    return (
        <div>
            <Container>
                <img src={img} alt="" />
                <h5>{title}</h5>
                <h1>{name}</h1>
            </Container>
        </div>
    );
};

export default ServiceDetail;