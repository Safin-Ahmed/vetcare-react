import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './HomeNavbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
const HomeNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link as = {Link} to = "/home">Home</Nav.Link>
      <Nav.Link as = {Link} to = "/about">About Us</Nav.Link>
      <Nav.Link as = {Link} to = "/contact">Contact Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">User</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default HomeNavbar;