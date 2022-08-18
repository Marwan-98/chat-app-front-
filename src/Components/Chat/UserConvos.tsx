import { Col, Image } from "react-bootstrap";
import face from "../../Assets/face.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

function UserConvos() {
  const meUser = useSelector((state: RootState) => state.user.user)
  const conversations = useSelector((state: RootState) => state.conversations.conversations);

    return (
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
                                    <h5>{conversation.users.length <= 2 ? conversation.users.find(user => user.firstName !== meUser?.firstName)!.firstName : "Group Chat"}</h5>
                                    <p>{conversation.messages[0] ? conversation.messages[conversation.messages.length - 1].body : ""}</p>
                                </div>
                            </Col>
                        </div>
                    </Link>
                </div>
            </Col>
        ))}
    </Col>
    );
}

export default UserConvos