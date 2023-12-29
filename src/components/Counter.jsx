import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Counter.css";
function Counter() {
  const [state, setState] = useState(0);

  const increment = (state) => {
    setState((state) => state + 1);
  };

  const decrement = (state) => {
    setState((state) => state - 1);
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <p className="display-2">{state}</p>
                <Button onClick={increment} variant="success" className="m-1 ">
                  Increment
                </Button>
                <Button onClick={decrement} variant="warning" className="m-1 ">
                  Decrement
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Counter;
