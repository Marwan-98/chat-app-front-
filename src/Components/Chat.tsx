import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';


import chatImage from "../Assets/chat.jpg";
import Protected from "./Protected";

import { Socket } from "socket.io-client";
import AppNav from "./Chat/AppNav";
import UserConvos from "./Chat/UserConvos";
import Users from "./Chat/Users";
import { useState } from "react";


function Chat({ socket }: { socket: Socket }) {

  const [loading, setLoading] = useState(false);

  socket.on("connect", () => {
    console.log("connected");
  });

  return (
    <Protected>
      <div 
      className={`align-items-center justify-content-center`}
      style={{
        display: loading ? "flex" : "none",
        position: "absolute",
        minHeight: "100vh",
        minWidth: "100%",
        backgroundColor: "white",
        opacity: "0.5"
      }}>
        <div>
        <Spinner animation="border" role="status"/>
        </div>
      </div>
      <div className="pt-5"
        style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          backgroundImage: `url('${chatImage}')`,
          backgroundSize: "cover",
        }}>
        <AppNav />
        <Container className="mt-5">
          <Row className="mt-5">
            <UserConvos />
            <Users setLoading={setLoading}/>
          </Row>
        </Container>
      </div>
    </Protected>
  );
}

export default Chat;
