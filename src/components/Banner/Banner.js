import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div className = "banner-section">
            <Container>
                <Row>
                   <Col className = "text-center text-sm-start" lg = {6}>
                   <h1 className = "banner_title">YOUR PET'S<br /><span className = "text-success">BEST </span>FRIEND</h1>
                    <p className = "d-none d-sm-block text-white mt-3 mb-4">Excellent pets deserve excellent care. We are always fully<br/>focused on helping your pet and you to overcame any hurdle.<br/> Love is the best medicine.</p>
                    <p className = "d-block d-sm-none text-white mt-3 mb-4">Excellent pets deserve excellent care. We are always fully focused on helping your pet and you to overcame any hurdle.Love is the <br/> best medicine.</p>
                    <Button className="px-5 py-2 d-inline text-uppercase" variant="success">About US</Button>
                    <Button className="px-5 py-2 d-inline text-uppercase ms-2" variant="light">Log In</Button>
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;