import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Members.css'
import member1 from '../../images/doctors/one.jpg';
import member2 from '../../images/doctors/two.jpg';
import member3 from '../../images/doctors/three.jpg';
import member4 from '../../images/doctors/four.jpg';

const Members = () => {
    return (
        <div className = "members-section">
            <Container>
                <Row className = "gy-5">
                    <Col xs = {6} lg = {3}>
                    <Card className = "shadow rounded single-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={member1} />
                        <Card.Body>
                            <Card.Title>Lynda Paul</Card.Title>
                            <Card.Text>
                            Lynda Paul is a dog expert. She treats all the pets as her own baby and cures all kind of problems with her skillsets in vet. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xs = {6} lg = {3}>
                    <Card className = "shadow rounded single-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={member2} />
                        <Card.Body>
                            <Card.Title>Ashley Wilson</Card.Title>
                            <Card.Text>
                            Ashley is a cat expert. She treats all the pets as her own baby and cures all kind of problems with her skillsets in vet. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs = {6} lg = {3}>
                    <Card className = "shadow rounded single-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={member3} />
                        <Card.Body>
                            <Card.Title>Gaberiela Beckett</Card.Title>
                            <Card.Text>
                            Gabriela is a true expert and vet nurse. She treats all the pets with love and treats all kind of problems with patience and dedication. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs = {6} lg = {3}>
                    <Card className = "shadow rounded single-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={member4} />
                        <Card.Body>
                            <Card.Title>Lena Wilson</Card.Title>
                            <Card.Text>
                            Lena is a very passionate vet doctor. She treats all the pets with love and treats all kind of problems with patience and dedication. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Members;