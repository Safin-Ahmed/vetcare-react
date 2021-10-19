import React from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';

const ServiceDetail = () => {
    const {id} = useParams();
    const services = useServices();
    console.log(services);
    const serviceDetail = services.find(service => service.id === id);
    console.log(serviceDetail);
    return (
        <div>
            <h1>This is detailed Service - {id}</h1>
        </div>
    );
};

export default ServiceDetail;