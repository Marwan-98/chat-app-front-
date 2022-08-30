import moment from "moment";
import { Col } from "react-bootstrap";
import { message } from "../../types";

const chatBlock = ({message}: {message: message}) => {
  return (
    <Col xs={12} className={`d-flex ${message.user.email === JSON.parse(localStorage.getItem("user")!).email! ? "justify-content-end" : "justify-content-start"} text-start my-2`} >
    <div style={{ backgroundColor: message.user.email === JSON.parse(localStorage.getItem("user")!).email! ? "#296EFA" : "#F6F6F8",
    color: message.user.email === JSON.parse(localStorage.getItem("user")!).email! ? "#FFFFFF" : "#000000"
    , width: "300px", height: "100px", borderRadius:"10px"}} className="d-flex align-items-start justify-content-around p-2 flex-column">
      <span style={{display: "block"}}>{message.body}</span >
      <span style={{display: "block"}}>{moment(message.date_created).format('h:mm a')}</span >
    </div>
  </Col>
  );
};

export default chatBlock;
