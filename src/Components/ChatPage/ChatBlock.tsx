import React from "react";
import { Col } from "react-bootstrap";
import { message } from "../../types";

const chatBlock = ({message}: {message: message}) => {
  return (
    <Col xs={12} className={`d-flex ${message.user.email === JSON.parse(localStorage.getItem("user")!).email! ? "justify-content-end" : "justify-content-start"} text-start my-2`} >
    <div style={{ backgroundColor: "white", width: "300px"}}>
      <h6>{message.user.firstName}</h6>
      <p>{message.body}</p>
      <p>{message.date_created}</p>
    </div>
  </Col>
  );
};

export default chatBlock;
