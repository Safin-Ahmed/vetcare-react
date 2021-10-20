import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const services = useServices();
    if(services.length){
        const detailedService = services.find(service => service.id === parseInt(serviceId));
        const {id, img, name, title, description} = detailedService;
        return (
            <div className = "service-detail-section">
                <Container className = "text-center">
                    <img src={img} alt = "" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                </Container>
            </div>
        );
    }
    else{
        return <h1>Loading</h1>
    }
   
};

export default ServiceDetail;