

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

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { getAllConversations, getAllUsers, newCoversation } from "../api";
import { setConversations } from "../redux/reducer/conversationsState";

import { Socket } from "socket.io-client";
import { setUsers } from "../redux/reducer/usersState";



function Chat({ socket }: { socket: Socket }) {

  socket.on("connect", () => {
    console.log("connected");
  });

  const meUser = useSelector((state: RootState) => state.user.user)
  const conversations = useSelector((state: RootState) => state.conversations.conversations);
  const users = useSelector((state: RootState) => state.users.users);

  console.log(users)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers().then((res) => {
      dispatch(setUsers(res.data))
    })
    getAllConversations(localStorage.getItem("email")!).then((response) => {
      dispatch(setConversations(response.data));
    });
  }, [])

  const createConv = (userId: number, senderId: number) => {
    for(let i = 0; i < conversations.length; i++) {
      if(conversations[i].users[0].id === userId) {
        console.log("found");
        return navigate(`/chatPage/${conversations[i].id}`) 
      }
    }
    newCoversation(userId, senderId).then(async (response) => {
      await getAllConversations(localStorage.getItem("email")!).then((response) => {
        dispatch(setConversations(response.data));
      })
      navigate(`/chatPage/${response.data.id}`)
    })
  }

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
        <Navbar style={{ backgroundColor: "#F8F5F5" }} fixed="top">
          <Container>
            <h1>Chat</h1>
          </Container>
        </Navbar>
        <Container className="mt-5">
          <Row className="mt-5">
          <Col xs={8}>
              {conversations.map((conversation) => (
                <Col className="my-2 ms-5" xs={12} key={conversation.id}>
                  <div
                    style={{
                      backgroundColor: "#EEEEEE",
                      width: "300px",
                      cursor: "pointer",
                    }}
                  >
                    <Link to={`/chatPage/${conversation.id}`} state={{ messages: conversation.messages, conversationID: conversation.id }}>
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
                            <h5>{conversation.users.find(user => user.firstName !== meUser?.firstName)!.firstName}</h5>
                            <p>{conversation.messages[0] ? conversation.messages[conversation.messages.length - 1].body : ""}</p>
                          </div>
                        </Col>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Col>
            <Col xs={4} className="bg-white text-start" style={{
              minHeight: "100vh",
              maxHeight: "100vh",
              overflowY: "scroll",
              overflowX: "hidden",    
            }}>
              <Row>
                {users.map((user) => {
                  return (
                    <Col xs={12}>
                      <Row>
                        <Col xs={4}>
                          <Image
                            src={face}
                            roundedCircle={true}
                            style={{ width: "60px" }}
                            className="my-1"
                          />
                        </Col>
                        <Col xs={8} className="text-start">
                          <span>{user.firstName} {user.lastName}</span>
                          <p style={{cursor: "pointer"}} onClick={() => createConv(user.id, meUser!.id)}>Chat</p>
                        </Col>
                      </Row>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Protected>
  );
}

export default Chat;
