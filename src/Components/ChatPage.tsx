import {
  Button,
  Container,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import bg from "../Assets/bg.jpg";
import Protected from "./Protected";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { chatMessage } from "../types";
import { useEffect, useState } from "react";

import { Socket } from "socket.io-client";
import { getAllMessages, saveMessage } from "../api";
import { useParams } from "react-router";
import AppNav from "./Chat/AppNav";
import ChatBlock from "./ChatPage/ChatBlock";
import { setMessages } from "../redux/reducer/conversationsState";

const ChatPage = ({ socket }: { socket: Socket }) => {

  const [message, setMessage] = useState("")

  const user = useSelector((state: RootState) => state.user.user);
  const conversations = useSelector((state: RootState) => state.conversations.conversations);
  const allMessages = useSelector((state: RootState) => state.conversations.messages);

  console.log(conversations);

  const dispatch = useDispatch();

  const { id } = useParams();

  const sendMessage = async (message: chatMessage) => {
    const data = {
      id,
      ...message
    }
    await saveMessage({ userID: data.userID, body: data.body, conversationID: data.id }, dispatch).then((res) => {
      dispatch(setMessages(res.data.messages));
    })
    for(let i = 0; i < conversations.length; i++) {
      if(conversations[i].id == data.id) {
        if(conversations[i].users.length > 2) {
          console.log(conversations[i].users.length)
          await socket.emit("send_group_message", data);
        } else {
          await socket.emit("send_message", data);
        }
      }
    }
  }

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      getAllMessages(+id!, dispatch).then((res) => {
        dispatch(setMessages(res.data))
      })
    });
    socket.on("recieve_group_message", (data) => {
      getAllMessages(+id!, dispatch).then((res) => {
        console.log(res.data)
        dispatch(setMessages(res.data))
      })
    });
  }, [socket])

  const joinConversation = (conversation_id: string) => {
    for (let i = 0; i < conversations.length; i++) {
      if (conversations[i].id == id!) {
        const _user = conversations[i].users.find(_user => _user.id === user!.id)
        if (_user) {
          socket.emit("join_conversation", (conversation_id).toString())
        }
      }
    }
  }

  useEffect(() => {
    joinConversation(id!);
    getAllMessages(+id!, dispatch).then((res) => {
      dispatch(setMessages(res.data))
    })
  }, [])

  return (
    <Protected>
      <>
        <AppNav text="Chat" />
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <Container className="chatPage text-dark mt-5 pt-5">
            <Row>
              {allMessages.map((message) => {
                return (<ChatBlock message={message} />)
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
