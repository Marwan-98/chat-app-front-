import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllConversations, getAllUsers, signUser } from "../api/index";
import { ToastContainer, toast } from "react-toastify";

import loginImage from "../Assets/login.jpg";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const alert = toast.loading("Please wait...");
      signUser(values)
        .then(async () => {
          await getAllUsers(dispatch);
          await getAllConversations(values.email, dispatch);
        })
        .then(() => {
          navigation("/chat");
        })
        .catch((err) => {
          toast.update(alert, {
            render: `${err.response.data}`,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          console.log(err);
        });
    },
  });

  return (
    <>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} fixed="top">
        <Container>
          <h1 className="fs-3">Sign up</h1>
        </Container>
      </Navbar>
      <Row className="m-0" style={{ minHeight: "100vh" }}>
        <Col
          lg={6}
          className="d-none d-lg-block"
          style={{
            backgroundImage: `url('${loginImage}')`,
            backgroundSize: "cover",
          }}
        ></Col>
        <Col
          lg={6}
          xs={12}
          style={{ backgroundColor: "#EEEEEE" }}
          className="d-flex justify-content-center align-items-center p-0"
        >
          <Form className="w-50" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3 text-start">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder=""
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </Form.Group>

            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <Form.Group className="mb-3 text-start">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder=""
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </Form.Group>

            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <Form.Group className="mb-3 text-start">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder=""
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Group>

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <Form.Group className="mb-3 text-start">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder=""
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Group>

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-5"
              style={{ backgroundColor: "#464646", borderColor: "#464646" }}
            >
              Sign up
            </Button>
            <br />
            <Form.Text className="text-muted">
              Already have an account, <a href="/login"> Login </a>
            </Form.Text>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </>
  );
}

export default Login;
