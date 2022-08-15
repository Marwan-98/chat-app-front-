

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

import chatImage from "../Assets/chat.jpg";
import face from "../Assets/face.jpg";
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Protected from "./Protected";

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { getAllConversations, getAllUsers } from "../api";
import { setConversations } from "../redux/reducer/conversationsState";
import { io } from "socket.io-client";

const socket = io("http://localhost:2000/");

socket.on("connect", () => {
  console.log("connected");
});

function Chat() {
  const conversations = useSelector((state: RootState) => state.conversations.conversations);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllConversations(localStorage.getItem("email")!).then((response) => {
      dispatch(setConversations(response.data));
    });
  }, [])

  const sendMessage = () => {
    // socket.emit()
  }

  return (
    <Protected>
      <>
        <Navbar style={{ backgroundColor: "#F8F5F5" }} fixed="top">
          <Container>
            <h1>Chat</h1>
          </Container>
        </Navbar>
        <Row
          className="pt-5"
          style={{
            minHeight: "100vh",
            maxHeight: "100vh",
            overflowY: "scroll",
            overflowX: "hidden",
            backgroundImage: `url('${chatImage}')`,
            backgroundSize: "cover",
          }}
        >
          <div className="pt-5">
            {conversations.map((conversation) => (
              <Col className="my-2 ms-5" xs={12} key={conversation.id}>
                  <div
                    style={{
                      backgroundColor: "#EEEEEE",
                      width: "300px",
                      cursor: "pointer",
                    }}
                  >
                    <Link to={"/chatPage"} state={conversation.messages}>
                    <div className="d-flex justify-content-center align-items-center p-2">
                    <Col className=" d-flex  justify-content-center align-items-center">
                      <Image
                        src={face}
                        roundedCircle={true}
                        style={{ width: "100px" }}
                      />
                    </Col>
                    <Col className="text-start d-flex justify-content-start align-items-center">
                      <div>
                        <h5>{conversation.users[0].firstName}</h5>
                        <p>{conversation.messages ? conversation.messages[conversation.messages.length - 1].body : ""}</p>
                      </div>
                    </Col>
                    </div>
                </Link>
                  </div>
              </Col>
            ))}
          </div>
        </Row>
      </>
    </Protected>
  );
}

export default Chat;
