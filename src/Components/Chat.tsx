import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import chatImage from "../Assets/chat.jpg";
import Protected from "./Protected";

import { Socket } from "socket.io-client";
import AppNav from "./Chat/AppNav";
import UserConvos from "./Chat/UserConvos";
import Users from "./Chat/Users";



function Chat({ socket }: { socket: Socket }) {

  socket.on("connect", () => {
    console.log("connected");
  });
  
  return (
    <Protected>
      <div className="pt-5"
        style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          backgroundImage: `url('${chatImage}')`,
          backgroundSize: "cover",
        }}>
        <AppNav text={"Chat"} />
        <Container className="mt-5">
          <Row className="mt-5">
            <UserConvos />
            <Users />
          </Row>
        </Container>
      </div>
    </Protected>
  );
}

export default Chat;
