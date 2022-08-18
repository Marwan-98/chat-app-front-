import { Container, Row } from "react-bootstrap";
import UserConvos from "./UserConvos";
import Users from "./Users";

function ChatBody() {
    return (
        <Container className="mt-5">
            <Row className="mt-5">
                <UserConvos />
                <Users />
            </Row>
        </Container>
    );
}

export default ChatBody