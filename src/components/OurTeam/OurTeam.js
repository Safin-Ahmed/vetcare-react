import React from 'react';
import './OurTeam.css';
import { Col, Container, Row} from 'react-bootstrap';
import doctor from '../../images/doctor.png';
import sign from '../../images/sign.png';

const OurTeam = () => {
    return (
        <div className = "team-section">
            <Container>
                <Row className="align-items-center">
                   <Col lg = {6}>
                   <h1>OUR <span className = "text-success">TEAM</span></h1>
                    <p className = "mt-3 mb-4">Dr. Stephanie Wosniack is is dedicated to providing her patients with the<br /> best possible care. Her loves in life include her husband, Craig, two<br/>cattle dogs, Suture and Kanga, a Malinois, Kiva, and her two horses,<br /> Widget and Doc.</p>
                    <img src={sign} alt="" />
                   </Col>
                   <Col className="text-center" lg = {6}>
                       <img className="w-75" src={doctor} alt="" />
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurTeam;