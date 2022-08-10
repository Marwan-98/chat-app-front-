import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import bg from "../Assets/bg.jpg";

const ChatPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container className="chatPage w-100 fluid d-flex justify-content-center algn-items-center">
        <div className="chatPage">
          <ListGroup>
            <ListGroup.Item action variant="dark">
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
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default ChatPage;
