import Form from "react-bootstrap/Form";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import p from "../Assets/image.jpg";
import Image from "react-bootstrap/Image";
import { useFormik } from "formik";
import { signUser } from "../api/index";
import * as Yup from 'yup';
import { useNavigate } from "react-router";

const SignUp = () => {


  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      signUser(values).then(()=>{
        navigation('/chat');


      })

    },
  });

  return (
    <div className="fluid d-flex ">
       <Navbar style={{backgroundColor: "#FFFFFF"}} fixed="top">
        <Container>
          <h1>Sign Up</h1>
        </Container>
      </Navbar> 
      <Row   className="fluid d-flex  ">
        <Col className="form fluid d-flex" >
          <Image src={p} className="image-fluid w-100"></Image>
        </Col>
        <Col className="form   text-dark" style = { { backgroundColor: "#EEEEEE"}}  >
          <Form
            onSubmit={formik.handleSubmit}
            className=" button text-sm-left m-5 p-5"
          >
            <Form.Group className="mb-3 text-start">
              <Form.Label className="text-sm-left">First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 text-start">
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
            <Form.Group className="mb-3 text-start">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
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
              className="button btn-primary w-100 d-block" style={{backgroundColor: "#464646", borderColor: "#464646"}}
            >
              Sign Up
            </Button>{" "}
            <p>
              &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an
              account&nbsp;&nbsp; <a href="/login"> Log In </a>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
