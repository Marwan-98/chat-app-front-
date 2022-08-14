

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

function Chat() {


  const users=useSelector((state: RootState) => state.chatApp.user)

  const dispatch =useDispatch();


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
            {users.map((user) => (
              <Col className="my-2 ms-5" xs={12}>
                <div
                  style={{
                    backgroundColor: "#EEEEEE",
                    width: "300px",
                    cursor: "pointer",
                  }}
                  className="d-flex justify-content-center align-items-center p-2"
                >
                  <Col className=" d-flex  justify-content-center align-items-center">
                    <Image
                      src={face}
                      roundedCircle={true}
                      style={{ width: "100px" }}
                    />
                  </Col>
                  <Col className="text-start d-flex justify-content-start align-items-center">
                    <div>
                      <h5>{user.firstName}</h5>
                      <p>Good morning</p>
                    </div>
                  </Col>
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
