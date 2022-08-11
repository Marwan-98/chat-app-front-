import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import p from "../Assets/image.jpg";
import Image from "react-bootstrap/Image";

const signUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("jjjjjjjjjjjjjjjj");
      const newOrder = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      formik.resetForm();
    },
  });

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

export default signUp;
function useFormik(arg0: {
  initialValues: {
    firstName: string;
    lastName: string;
    mobile: number;
    city: string;
    address: string;
  };
  onSubmit: (values: any) => void;
}) {
  throw new Error("Function not implemented.");
}
