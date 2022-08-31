import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';

import Protected from "./Protected";

import { Socket } from "socket.io-client";
import AppNav from "./Chat/AppNav";
import Users from "./Chat/Users";
import { useState } from "react";
import ChatPage from "./ChatPage";

function Chat({ socket }: { socket: Socket }) {
  const [loading, setLoading] = useState(false);

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
          <Spinner animation="border" role="status" />
        </div>
      </div>
      <div id="app-container">
        <AppNav />
        <Row >
          <Users setLoading={setLoading} />
          <ChatPage socket={socket}/>
        </Row>
      </div>
    </Protected>
  );
}

export default Chat;
