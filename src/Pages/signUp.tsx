import Form from "react-bootstrap/Form";
import { Button, Col, Container, Row } from "react-bootstrap";
import p from '../Assets/image.jpg'
import Image from "react-bootstrap/Image";

const signUp = () => {
  return (
    <div>
      {" "}
      <Row className="fluid d-flex justify-content-center algn-items-center ">
        <Col className="form">
        
        <Image src={p} className="image-fluid w-100">


        </Image>
        </Col>
        <Col className="form   mb-2  text-dark">
          <Form className=" button justify-content-center align-items-center m-5 p-5">
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstname" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name </Form.Label>
              <Form.Control type="lastname" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button variant="secondary" type="submit" className="button btn-primary mx-auto d-block " >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default signUp;
