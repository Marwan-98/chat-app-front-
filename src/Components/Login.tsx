import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginImage from '../Assets/login.jpg'

import { useFormik } from 'formik';

import * as Yup from 'yup';

function Login() {

  const formik = useFormik({
    initialValues: {
      mail: '',
      password: '',
    },
     validationSchema: Yup.object({
       mail: Yup.string().required('Email is required'),
       password: Yup.string().required('Password is required'),
     }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return ( <
    >
    <Navbar style={{backgroundColor: "#FFFFFF"}} fixed="top">
        <Container>
          <h1>Login</h1>
        </Container>
      </Navbar> <
    Row style = { { minHeight: "100vh"  } } >
    <Col lg={6} className="d-none d-lg-block" style={{backgroundImage: `url('${loginImage}')`, backgroundSize: "cover"}}>
    </Col> <
    Col lg = { 6 } xs = { 12 } style = { { backgroundColor: "#EEEEEE"} } className = "d-flex justify-content-center align-items-center p-0" >
    <Form className="w-50" onSubmit={formik.handleSubmit}>

      <Form.Group className="mb-3 text-start">
        <Form.Label>Email</Form.Label>
        <Form.Control  
        placeholder=""
        id="mail" 
        name="mail" 
        type="text" 
        onChange={formik.handleChange} 
        value={formik.values.mail}/>
      </Form.Group>

       {formik.touched.mail && formik.errors.mail ? (
         <div>{formik.errors.mail}</div>
       ) : null}

      <Form.Group className="mb-3 text-start">
        <Form.Label >Password</Form.Label>
        <Form.Control 
        placeholder=""  
        id="password" 
        name="password" 
        type="text" 
        onChange={formik.handleChange} 
        value={formik.values.password}/>
      </Form.Group>

 {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}

      <Button variant="primary" type="submit" className="w-100 mt-5" style={{backgroundColor: "#464646", borderColor: "#464646"}}>
        Sign in
      </Button>
      <br/>
      <Form.Text className="text-muted">
          Don't have an account, <a href="#"> sign up </a>
      </Form.Text>
    </Form> 
    </Col> 
    </Row> 
    </>
  );
}

export default Login;