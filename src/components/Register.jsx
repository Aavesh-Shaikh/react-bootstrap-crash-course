import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function Register() {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });

  let userData = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(state.user);
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={3}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                variant="primary"
                style={{ backgroundColor: "#0d6efd", color: "#fff" }}
              >
                <h4>Register</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "rgb(244 248 253)" }}>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name="username"
                      onChange={userData}
                      type="text"
                      placeholder="Username"
                      className="mb-3"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="email"
                      onChange={userData}
                      type="email"
                      placeholder="Email"
                      className="mb-3"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      name="password"
                      onChange={userData}
                      type="password"
                      placeholder="Password"
                      className="mb-3"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button
                      onClick={handleRegister}
                      variant="primary"
                      type="submit"
                    >
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
