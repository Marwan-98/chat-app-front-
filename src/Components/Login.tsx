
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signIn, getAllUsers } from '../api/index';

import loginImage from '../Assets/login.jpg'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import * as Yup from 'yup';
import { setUsers } from '../redux/reducer/usersState'
import { setUser } from '../redux/reducer/userState'
function Login() {



  const dispatch = useDispatch();
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async values => {
      signIn(values.email, values.password).then((res) => {
        localStorage.setItem("email", values.email);
        localStorage.setItem("token", res.data.data);
        dispatch(setUser(res.data.user));
      }).then(() => {
        navigation('/chat')
      })
    },
  });


  return (<
    >
    <Navbar style={{ backgroundColor: "#FFFFFF" }} fixed="top">
      <Container>
        <h1>Login</h1>
      </Container>
    </Navbar> <
      Row style={{ minHeight: "100vh" }} >
      <Col lg={6} className="d-none d-lg-block" style={{ backgroundImage: `url('${loginImage}')`, backgroundSize: "cover" }}>
      </Col> <
        Col lg={6} xs={12} style={{ backgroundColor: "#EEEEEE" }} className="d-flex justify-content-center align-items-center p-0" >
        <Form className="w-50" onSubmit={formik.handleSubmit}>

          <Form.Group className="mb-3 text-start">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder=""
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email} />
          </Form.Group>

          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <Form.Group className="mb-3 text-start">
            <Form.Label >Password</Form.Label>
            <Form.Control
              placeholder=""
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password} />
          </Form.Group>

          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <Button

            variant="primary" type="submit" className="w-100 mt-5" style={{ backgroundColor: "#464646", borderColor: "#464646" }}>
            Sign in
          </Button>
          <br />
          <Form.Text className="text-muted">
            Don't have an account, <a href="/SignUp"> sign up </a>
          </Form.Text>
        </Form>
      </Col>
    </Row>
  </>
  );
}

export default Login;