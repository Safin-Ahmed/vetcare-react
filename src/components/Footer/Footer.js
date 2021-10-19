import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg = {3}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Appointment</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Signup</a></li>
                        </ul>
                    </Col>
                    
                    <Col lg = {3}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Appointment</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Signup</a></li>
                        </ul>
                    </Col>
                    <Col lg = {3}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Appointment</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Signup</a></li>
                        </ul>
                    </Col>
                    <Col lg = {3}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Appointment</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Signup</a></li>
                        </ul>
                    </Col>

                </Row>
                <div className = "copyright-text text-center mt-5">
                    <p className = "text-white">&copy;Copyright by Safin Ahmed 2021. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;