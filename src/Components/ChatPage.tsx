import {
  Button,
  Form,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { message } from "../types";
import { useEffect, useRef, useState } from "react";

import { Socket } from "socket.io-client";
import { getAllMessages, saveMessage } from "../api";
import ChatBlock from "./ChatPage/ChatBlock";
import { addMessage, setMessages } from "../redux/reducer/conversationsState";

const ChatPage = ({ socket }: { socket: Socket }) => {

  const [message, setMessage] = useState("")

  const meUser = useSelector((state: RootState) => state.user.user);
  const id = useSelector((state: RootState) => state.conversation.id);
  let conversation = useSelector((state: RootState) => state.conversations.conversations).find(conv => conv.id == id)
  const allMessages = useSelector((state: RootState) => state.conversations.messages);

  console.log(conversation)

  const dispatch = useDispatch();

  const bottomRef = useRef<HTMLDivElement>(null);

  const sendMessage = (message: message) => {
    const data = {
      id,
      message: {
        ...message
      }
    }
    saveMessage({ userID: data.message.user.id, body: data.message.body, conversationID: data.id }, dispatch).catch(err => {
      window.location.href = "/login";
    })
    socket.emit("send_message", { id: data.id, message: data.message });
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [allMessages]);

  useEffect(() => {
    socket.emit("join_conversation", id);
    console.log(id);
    getAllMessages(+id!, dispatch).then((res) => {
      dispatch(setMessages(res.data))
    })
  }, [id])

  useEffect(() => {
    socket.on("recieve_message", message => {
      dispatch(addMessage(message))
    })
    return () => {
      socket.off("recieve_message")
    }
  }, [socket])

  return (
    <Col xs={12} lg={8} className="text-start px-4">
      <Row className="px-4 d-flex flex-row">
      <h3 style={{ backgroundColor: "#F6F6F8" }}>{conversation?.title ? conversation?.title : conversation?.users.find(user => user.firstName !== meUser?.firstName)!.firstName}</h3>
      <div className="convos-block">
        {allMessages.map((message) => {
          return (<ChatBlock message={message} key={message.id} />)
        })}
        <div ref={bottomRef} />
      </div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="dark" onClick={message !== "" ? () => sendMessage({ id: Math.random(), body: message, date_created: new Date().toISOString(), user: meUser! }) : undefined}>
          Send
        </Button>
      </InputGroup>
      </Row>
    </Col>
  );
};

export default ChatPage;