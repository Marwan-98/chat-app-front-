import { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  setConversations,
  setMessages,
} from "../../redux/reducer/conversationsState";
import { setConvoId } from "../../redux/reducer/conversationState";
import { setUser } from "../../redux/reducer/userState";
import GroupModal from "./GroupModal";

function AppNav() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("users", "");
    localStorage.setItem("conversations", "");
    dispatch(setUser(null));
    dispatch(setConversations([]));
    dispatch(setMessages([]));
    dispatch(setConvoId("0"));
    navigation("/Login");
  };

  return (
    <Navbar style={{ backgroundColor: "#F8F5F5" }}>
      <Container>
        <h1>Chat</h1>
        <div className="flex">
          <Button
            className="mx-1"
            variant="primary"
            onClick={() => handleShow()}
          >
            Create Group Chat
          </Button>
          <Button className="mx-1" variant="danger" onClick={() => logout()}>
            Logout
          </Button>
        </div>
        <GroupModal show={show} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
}

export default AppNav;
