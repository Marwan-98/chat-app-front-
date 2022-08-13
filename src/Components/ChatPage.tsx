import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Navbar,
  Nav,
  NavLink,
  Col,
  Row,
} from "react-bootstrap";
import bg from "../Assets/bg.jpg";
import ChatList from "../Assets/ChatList.svg";
import Image from "react-bootstrap/Image";
import Protected from "./Protected";

const ChatPage = () => {
  return (
    <Protected>
    <>
    <Navbar style={{ backgroundColor: "#FFFFFF" }}>
        <Container>
          <Nav.Link to="/chat" as={NavLink}>
            <Image
              className="justify-content-left align-items-left"
              src={ChatList}
              style={{ width: 35, height: 35 }}
            ></Image>
            <span className="fw-border fs-4  m-1 P-1"> Chat </span>
          </Nav.Link>{" "}
        </Container>
      </Navbar>
<div
  className="fluid d-flex
w-100 m-0 p-0"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    height: "min-100vh",
  }}
>
  <Container className="w-100 fluid d-flex mt-4 justify-content-center algn-items-center">
    <div className="chatPage  mb-4">
    <Card className="m-5" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-start">zaynab</Card.Title>
              <Card.Text>                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄</Card.Text>
            </Card.Body>
          </Card>

          
                 <Row> 
                  <Col className="sm-10"></Col>
                  <Col className="sm-2">
          <Card
            className=" m-5 p-0 "
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title className="text-start">amr</Card.Title>
              <Card.Text>
               Hi every body
               <div className="text-end">12:45</div> 

              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <br />

          <Card className="m-5"
style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-start">marwan</Card.Title>
              <Card.Text>Zaynab, did you finished Redux Task?</Card.Text>
              <div className="text-end">12:45</div> 

            </Card.Body>
          </Card>
<br/>

          <Card
            className=" m-5"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title className="text-start">ezz</Card.Title>
              <Card.Text>
                Mom I need Rice now 
                <div className="text-end">12:45</div> 

              </Card.Text>
            </Card.Body>
          </Card>

          <br/>
          <Row> 
                  <Col className="sm-8"></Col>
                  <Col className="sm-4">
          <Card
            className="m-5"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title className="text-start">zaynab</Card.Title>
              <Card.Text>
good bye               <div className="text-end">12:45</div> 

              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <br />
          <br />
      <InputGroup>
        <Form.Control />
        <Button variant="dark">Send</Button>
      </InputGroup>
    </div>
  </Container>
</div>
</>
</Protected>
  );
};

export default ChatPage;
