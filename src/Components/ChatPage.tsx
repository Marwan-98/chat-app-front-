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
import { chatMessage, message } from "../types";
import { useEffect, useRef, useState } from "react";

import { Socket } from "socket.io-client";
import { getAllMessages, saveMessage } from "../api";
import { useParams } from "react-router";
import AppNav from "./Chat/AppNav";
import ChatBlock from "./ChatPage/ChatBlock";
import { addMessage, setMessages } from "../redux/reducer/conversationsState";

const ChatPage = ({ socket }: { socket: Socket }) => {

  const [message, setMessage] = useState("")

  const user = useSelector((state: RootState) => state.user.user);
  const conversations = useSelector((state: RootState) => state.conversations.conversations);
  const allMessages = useSelector((state: RootState) => state.conversations.messages);
  
  const dispatch = useDispatch();

  const { id } = useParams();

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
    socket.emit("send_message", {id: data.id, message: data.message});
    // for(let i = 0; i < conversations.length; i++) {
    //   if(conversations[i].id == data.id) {
    //     if(conversations[i].users.length > 2) {
    //       socket.emit("send_group_message", {id: data.id, message: data.message});
    //     } else {
    //     }
    //   }
    // }
  }

  useEffect(() => {
    socket?.on("recieve_message", (data) => {
      console.log("useEffect")
        dispatch(addMessage(data))
    });
    // socket.on("recieve_group_message", (data) => {
    //   dispatch(addMessage(data))
    // });
  }, [])

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

  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [allMessages]);

  return (
    <Protected>
      <>
        <AppNav/>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            minHeight: "calc(100vh - 48px)",
          }}
        >
          <Container className="chatPage text-dark mt-5" >
            <Row style={{minHeight: "calc(100vh - 102px)", maxHeight: "calc(100vh - 102px)", overflowY: "scroll"}} className="pt-5">
              {allMessages.map((message) => {
                return (<ChatBlock message={message} key={message.id}/>)
              })}
            <div ref={bottomRef}/>
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
                      <Button variant="dark" onClick={() => sendMessage({ id: Math.random(), body: message, date_created: new Date().toISOString() , user: user! })}>
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
