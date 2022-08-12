import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import p from "../Assets/image.jpg";
import Image from "react-bootstrap/Image";
import {useFormik} from 'formik';
import {signUser} from "../api/index"

const SignUp = () => {





const formik= useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  onSubmit: values => {
    signUser(values)
  }
})

  

  return (
    <div className="fluid d-flex ">
      <Row className="fluid d-flex justify-content-center algn-items-center ">
        <Col className="form fluid d-flex">
          <Image src={p} className="image-fluid w-100"></Image>
        </Col>
        <Col className="form   text-dark">
          <Form
            onSubmit={formik.handleSubmit} 
            className=" button justify-content-center align-items-center m-5 p-5"
          >
            <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control 
               type="text"
               name="firstName"
               id="firstName"
               value={formik.values.firstName}
               onChange={formik.handleChange}
               />
             
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Last Name </Form.Label>
              <Form.Control 
               type="text"
               name="lastName"
               id="lastName"
               value={formik.values.lastName}
               onChange={formik.handleChange}
               />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control 
               type="text"
               name="email"
               id="email"
               value={formik.values.email}
               onChange={formik.handleChange}
               />
              
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
             
              <Form.Control 
               type="text"
               name="password"
               id="password"
               value={formik.values.password}
               onChange={formik.handleChange}
               />

            </Form.Group>
            <br />
            <Button
              variant="secondary"
              type="submit"
              className="button btn-primary w-100 d-block "
            >
              Sign Up
            </Button>{" "}
            <p>
              &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an
              account&nbsp;&nbsp; <span className="text-primary">Log In</span>{" "}
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;