import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './HomeNavbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const HomeNavbar = () => {
  const {user, logout, isLoading} = useAuth();
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
      
      { user?.email || user?.displayName ? 
        <Button onClick = {logout} variant = "warning">Logout</Button>
        :
        <Button as = {Link} to = "/login" variant = "success">Login</Button>
      }
      { user?.displayName && <Navbar.Text>Signed in as : {user.displayName}</Navbar.Text>}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default HomeNavbar;