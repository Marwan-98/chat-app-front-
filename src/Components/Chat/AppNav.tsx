import { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import GroupModal from "./GroupModal";

function AppNav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar style={{ backgroundColor: "#F8F5F5" }}>
            <Container>
                <h1>Chat</h1>
                <Button variant="primary" onClick={() => handleShow()}>
                    Create Group Chat
                </Button>
                <GroupModal show={show} handleClose={handleClose}/>
            </Container>
        </Navbar>
    );
}

export default AppNav