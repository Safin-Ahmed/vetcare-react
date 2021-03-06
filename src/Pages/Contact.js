import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className = "p-5">
            <h1 style = {{fontSize:"32px"}} className = "d-none d-sm-block banner_title mb-5 text-dark text-center">Contact Us<br /><span className = "text-success">For Appoinment </span></h1>
            <h1 style = {{fontSize:"32px"}} className = "d-block d-sm-none banner_title mb-5 text-dark text-center">Contact<span className = "text-success">Us</span></h1>
           <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Pet Owner" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
        </Container>
    );
};

export default Contact;