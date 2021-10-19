import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>This is detailed Service - {id}</h1>
        </div>
    );
};

export default ServiceDetail;