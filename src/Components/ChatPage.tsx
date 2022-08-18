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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { chatMessage, messagesDetails } from "../types";
import { message } from "../types"
import { useEffect, useState } from "react";

import { Socket } from "socket.io-client";
import { checkLogin, getAllMessages, saveMessage } from "../api";
import { useParams } from "react-router";
import { setMessages } from "../redux/reducer/conversationsState";

const ChatPage = ({ socket }: { socket: Socket }) => {

  const [message, setMessage] = useState("")
  const [ref, setRef] = useState(0)

  const user = useSelector((state: RootState) => state.user.user);
  const conversations = useSelector((state: RootState) => state.conversations.conversations);
  const allMessages = useSelector((state: RootState) => state.conversations.messages);

  const dispatch = useDispatch();

  const { id } = useParams();

  const sendMessage = async (message: chatMessage) => {
    const data = {
      id,
      ...message
    }
    await saveMessage({userID: data.userID, body: data.body, conversationID: data.id}).then((res) => {
      dispatch(setMessages(res.data.messages));
    })
   await socket.emit("send_message", data);
  }

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      getAllMessages(+id!).then((res) => {
        dispatch(setMessages(res.data))
      })
    });
  }, [socket])

  const joinConversation = (conversation_id: string) => {
    for(let i = 0; i < conversations.length; i++) {
      if(conversations[i].id == id!) {
        const _user = conversations[i].users.find(_user => _user.id === user!.id)
        if(_user) {
          socket.emit("join_conversation", (conversation_id).toString())
        }
      }
    }
  }

  useEffect(() => {
    joinConversation(id!);
    getAllMessages(+id!).then((res) => {
      dispatch(setMessages(res.data))
    })
  }, [])

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
              <span className="fw-border fs-4  m-1 p-1"> Chat </span>
            </Nav.Link>{" "}
          </Container>
        </Navbar>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <Container className="chatPage text-dark" >
            <Row>
              {allMessages.map((message) => {
                return (
                  <Col xs={12} className={`d-flex ${message.user.email === localStorage.getItem("email")! ? "justify-content-end" : "justify-content-start"} text-start my-2`} key={message.id}>
                    <div style={{ backgroundColor: "white", width: "300px" }}>
                      <h6>{message.user.firstName}</h6>
                      <p>{message.body}</p>
                      <p>{message.date_created}</p>
                    </div>
                  </Col>
                )
              })}
            </Row>
            <Row className="w-100">
              <Col>
                <Form>
                  <Row>
                    <Col xs={8} sm={10} lg={11}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Write A Message..." onChange={(e) => setMessage(e.target.value)} />
                      </Form.Group>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                      <Button variant="dark" onClick={() => sendMessage({ body: message, userID: user!.id })}>
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </Protected>
  );
};

export default ChatPage;
