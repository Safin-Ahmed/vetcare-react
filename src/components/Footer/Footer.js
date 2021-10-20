import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs = {6} lg = {3}>
                        <ul>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/home">Home</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/about">About Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/contact">Contact Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/login">Login</Nav.Link>
                        </ul>
                    </Col>
                    
                    <Col xs = {6} lg = {3}>
                        <ul>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/home">Home</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/about">About Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/contact">Contact Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/login">Login</Nav.Link>
                        </ul>
                    </Col>
                    <Col xs = {6} lg = {3}>
                        <ul>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/home">Home</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/about">About Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/contact">Contact Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/login">Login</Nav.Link>
                        </ul>
                    </Col>
                    <Col xs = {6} lg = {3}>
                        <ul>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/home">Home</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/about">About Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/contact">Contact Us</Nav.Link>
                        <Nav.Link style = {{color : '#fff'}} as = {Link} to = "/login">Login</Nav.Link>
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