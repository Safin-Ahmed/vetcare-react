import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Container>
            <Row className="align-items-center justify-content-center">
            <Spinner animation="grow" variant="success" />
            </Row>
        </Container>
    }
    return (
       <Route {...rest} render={({location}) => user?.displayName ? children : <Redirect to = {{
           pathname: "/login",
           state: {from: location}
       }}></Redirect>}>

       </Route>
    );
};

export default PrivateRoute;