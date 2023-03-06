import React, {useState} from "react";
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        //
        alert(`Onsubmit! User: ${username}`);
    }

    const changeUser = (e) => {setUsername(e.target.value)};
    const changePass = (e)=>{setPassword(e.target.value)};

    return(
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        value={username}
                        onChange={changeUser}
                        />
                    </Form.Group>
                
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        value={password}
                        onChange={changePass}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}