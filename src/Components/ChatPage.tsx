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
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { messagesDetails } from "../types"

const ChatPage = () => {

  const user = useSelector((state: RootState) => state.user.user)

  const location = useLocation();

  const messages: any = location.state;
  console.log(messages);


  return (
    <Protected>
      <>
        <Navbar style={{ backgroundColor: "#FFFFFF" }}>
          <Container>
            <Nav.Link href="/chat" as={NavLink}>
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
            minHeight: "100vh",
          }}
        >
          <Container style={{ backgroundColor: "grey" }}>
            <Row>
              {messages?.map((message: messagesDetails) => {
                return (
                  <Col xs={12} className={`d-flex ${message.user.email === user!.email ? "justify-content-end" : "justify-content-start"} text-start my-2`}>
                    <div style={{ backgroundColor: "white", width: "300px" }}>
                      <h6>{message.user.firstName}</h6>
                      <p>{message.body}</p>
                      <p>{message.date_created}</p>
                    </div>
                  </Col>
                )
              })}
              <div>
                <input type="textarea"></input>
              </div>
            </Row>
          </Container>
        </div>
      </>
    </Protected>
  );
};

export default ChatPage;
