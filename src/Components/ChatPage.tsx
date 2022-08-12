import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Stack,
} from "react-bootstrap";
import bg from "../Assets/bg.jpg";

import Protected from "./Protected"

const ChatPage = () => {
  return (
    <Protected>
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
        <div className="chatPage mb-4">
        <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Zaynab</Card.Title>
                  <Card.Text>Hello World</Card.Text>
                </Card.Body>
              </Card>

              <br />
              <Card
                className=" justify-content-left algn-items-left"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title>Marwan</Card.Title>
                  <Card.Text>
                   Hi every body
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <br />

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Zaynab</Card.Title>
                  <Card.Text>Hello World</Card.Text>
                </Card.Body>
              </Card>

              <br />
              <Card
                className=" justify-content-left algn-items-left"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title>Marwan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <br />
          <InputGroup>
            <Form.Control />
            <Button variant="dark">Send</Button>
          </InputGroup>
        </div>
      </Container>
    </div>
    </Protected>
  );
};

export default ChatPage;
