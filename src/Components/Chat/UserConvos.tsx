import { Col, Image } from "react-bootstrap";
import face from "../../Assets/face.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

function UserConvos() {
  const meUser = useSelector((state: RootState) => state.user.user)
  const conversations = useSelector((state: RootState) => state.conversations.conversations);

    return (
        <Col xs={12} lg={8} className="p-0 pt-0 mt-0 pt-lg-3 mt-lg-5">
        {conversations.map((conversation) => (
            <Col className="my-2 mx-0 px-0 convos-block" xs={12} key={conversation.id}>
                <div
                    style={{
                        backgroundColor: "#EEEEEE",
                        width: "100%",
                        cursor: "pointer",
                    }}
                >
                    <Link to={`/chatPage/${conversation.id}`} state={{ messages: conversation.messages, conversationID: conversation.id }}
                    style={{color: "black", textDecoration: "none"}}>
                        <div className="d-flex justify-content-center align-items-center px-0 py-2">
                            <Col xs={6} className=" d-flex  justify-content-center align-items-center">
                                <Image
                                    src={face}
                                    roundedCircle={true}
                                    style={{ width: "100px" }}
                                />
                            </Col>
                            <Col xs={6} className="text-start d-flex justify-content-start align-items-center">
                                <div>
                                    <h5>{conversation.title ? conversation.title : conversation.users.find(user => user.firstName !== meUser?.firstName)!.firstName}</h5>
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