import moment from "moment";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { message } from "../../types";

const ChatBlock = ({ message }: { message: message }) => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <Col
      xs={12}
      className={`d-flex ${
        message.user.email === user!.email!
          ? "justify-content-end"
          : "justify-content-start"
      } text-start my-2`}
    >
      <div
        style={{
          backgroundColor:
            message.user.email === user!.email! ? "#296EFA" : "#F6F6F8",
          color: message.user.email === user!.email! ? "#FFFFFF" : "#000000",
          width: "300px",
          borderRadius: "10px",
        }}
        className="d-flex align-items-start justify-content-around p-2 flex-column"
      >
        <span style={{ display: "block" }}>{message.user.firstName}</span>
        <span style={{ display: "block" }}>{message.body}</span>
        <span style={{ display: "block" }}>
          {moment(message.date_created).format("h:mm a")}
        </span>
      </div>
    </Col>
  );
};

export default ChatBlock;
