import React, { useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import login from '../../images/user.jpg' 

const Login = () => {
    const {auth, signInWithGoogle, setEmail, setPassword, setUserName, userName, signUpWithForm, setIsLoading, updateProfile, signInwithForm} = useAuth();
    const location = useLocation();
    const history= useHistory();
    const redirectUrl = location.state?.from || '/home';
    const [isNew, setIsNew] = useState(false);
    const [error, setError] = useState('');
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result);
            setIsLoading(false);
            history.push(redirectUrl);
            
        })
    }
    const handleName = e => {
        setUserName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleCheckBox = e => {
        setIsNew(e.target.checked);
    }
    const handleRegistration = e => {
        e.preventDefault();
        signUpWithForm()
        .then(result => { 
            setIsLoading(true);
            updateProfile(auth.currentUser, {
                displayName: userName
              })
            setIsLoading(false);
            console.log(result)
            
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    const handleLogin = e => {
        e.preventDefault();
        signInwithForm()
        .then(() => {
            setIsLoading(false);
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    return (
        <div className = "login-section py-5">
            <Container>
                <Row>
                    <Col lg = {6}>
                        <h1 className = "text-center text-success">{isNew? "Create Your Account" : "Login To Your Account"}</h1>
                        <div className = "social-login text-center mt-4">
                            <Button onClick = {handleGoogleLogin} className = "mx-2 py-1 px-2" variant = "success"><BsGoogle></BsGoogle></Button>
                            <Button className = "mx-2 py-1 px-2" variant = "success"><BsFacebook></BsFacebook></Button>
                            <Button className = "mx-2 py-1 px-2" variant = "success"><BsTwitter></BsTwitter></Button>
                            <Button className = "mx-2 py-1 px-2" variant = "success"><BsLinkedin></BsLinkedin></Button>
                        </div>
                        <p className = "text-center mt-4">or use your email for {isNew? "registration" : "login"}</p>
                        <Form>
                        {isNew? <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control onBlur = {handleName} type="text" placeholder="Enter Your Name" />
                        </Form.Group> : ''}
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur = {handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur = {handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange = {handleCheckBox} type="checkbox" label="Don't have an account?" />
                        </Form.Group>
                        <h6 className = "text-danger fw-400 mb-4">{error}</h6>
                        {
                            isNew?<Button onClick = {handleRegistration} variant="primary" type="submit">
                            Register</Button>
                            :
                            <Button onClick = {handleLogin} variant="primary" type="submit">
                             Login
                            </Button>
                        }
                        </Form>
                    </Col>
                    <Col lg = {6}>
                        <img className = "login-banner img-fluid" src={login} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;