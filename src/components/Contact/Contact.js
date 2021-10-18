import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsGoogle, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Contact.css';
const Contact = () => {
    return (
        <div className = "contact-section text-center">
           <Container>
           <h6>Schedule Your Appoinment?</h6>
            <h1>OUR <span className = "text-success fw-bold">CONTACTS</span></h1>
            <p>Contact us with your problem and desired appointment time<br/> we will reply you back as soon as possible with all the informations.</p>
          <Row className="social-icons">
              <Col lg = {12}>
                  <a href="#"><BsFacebook className = "me-3 text-success"/></a>
                  <a href="#"><BsTwitter className = "me-3 text-success"/></a>
                  <a href="#"><BsInstagram className = "me-3 text-success"/></a>
                  <a href="#"><BsGoogle className = "me-3 text-success"/></a>
              </Col>
          </Row> 
           </Container>
        </div>
    );
};

export default Contact;