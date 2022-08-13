import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const chatBlock = () => {
  return (
    <>
      <Row className="  m-1 p-1 justify-content-center algn-items-center ">
        <Col sm={6} className="chatPage   mb-5 p-5  text-dark">
          <Form className=" p-5 m-5 button justify-content-center align-items-center m-5 p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Zaynab" />
              <Form.Text className="text-muted">Zaynab </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Marwan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark">Send</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default chatBlock;
