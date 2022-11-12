import { useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { StringSchema } from "yup";
import { getAllConversations, newCoversation } from "../../api";
import face from "../../Assets/face.jpg";
import { setMessages } from "../../redux/reducer/conversationsState";
import { setConvoId } from "../../redux/reducer/conversationState";
import { RootState } from "../../redux/store";

function Users({ setLoading }: { setLoading: Function }) {
  const meUser = useSelector((state: RootState) => state.user.user);
  const convId = useSelector((state: RootState) => state.conversation.id);
  const users = useSelector((state: RootState) => state.users.users).filter(
    (user) => user.id !== meUser!.id
  );
  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations
  );

  const dispatch = useDispatch();

  function joinConv(id: string) {
    dispatch(setConvoId(id));
  }

  const createConv = async (userId: number, senderId: number) => {
    for (let i = 0; i < conversations.length; i++) {
      if (
        conversations[i].users.find(
          (user) => user.id === userId && conversations[i].users.length === 2
        )
      ) {
        console.log("found");
        dispatch(setConvoId(conversations[i].id));
        return joinConv(conversations[i].id);
      }
    }
    setLoading(true);
    newCoversation(userId, senderId).then((response) => {
      console.log("created");
      getAllConversations(meUser!.email, dispatch);
      dispatch(setConvoId(response.data.id));
      setLoading(false);
      return joinConv(response.data.id);
    });
  };

  const join = (convoId: string) => {
    if (convoId !== convId) {
      dispatch(setMessages([]));
      dispatch(setConvoId(convoId));
      return joinConv(convoId);
    }
  };

  useEffect(() => {
    getAllConversations(meUser!.email, dispatch);
  }, []);

  return (
    <Col lg={4} xs={12} className="text-start d-lg-block">
      <Row className="p-3 users-block">
        <h2 className="d-none d-lg-block">Chats</h2>
        <Col
          key={Math.random()}
          className="my-lg-1 user"
          xs={1}
          lg={12}
          onClick={() => join("0")}
          style={{ cursor: "pointer", maxHeight: "100px" }}
        >
          <Row lg={6} className="d-flex align-items-center">
            <Col>
              <Image
                src={face}
                roundedCircle={true}
                style={{ width: "60px" }}
                className="my-1"
              />
            </Col>
            <Col lg={6} className="text-center d-none d-lg-block">
              <span>Public Room</span>
            </Col>
          </Row>
        </Col>
        {conversations.map((conversation) => {
          return (
            <Col
              key={conversation.id}
              className="my-lg-1 user"
              xs={1}
              lg={12}
              onClick={() => join(conversation.id)}
              style={{ cursor: "pointer", maxHeight: "100px" }}
            >
              <Row lg={6} className="d-flex align-items-center">
                <Col>
                  <Image
                    src={face}
                    roundedCircle={true}
                    style={{ width: "60px" }}
                    className="my-1"
                  />
                </Col>
                <Col lg={6} className="text-center d-none d-lg-block">
                  <span>
                    {conversation.title
                      ? conversation.title
                      : conversation.users.find(
                          (user) => user.email !== meUser?.email
                        )!.firstName}
                  </span>
                </Col>
              </Row>
            </Col>
          );
        })}
        <h2 className="d-none d-lg-block">Users</h2>
        {users.map((user) => {
          return (
            <Col
              key={user.id}
              className="my-lg-1 user d-none d-lg-block"
              xs={1}
              lg={12}
              onClick={() => createConv(user.id, meUser!.id)}
              style={{ cursor: "pointer", maxHeight: "100px" }}
            >
              <Row lg={6} className="d-flex align-items-center">
                <Col>
                  <Image
                    src={face}
                    roundedCircle={true}
                    style={{ width: "60px" }}
                    className="my-1"
                  />
                </Col>
                <Col lg={6} className="text-center d-none d-lg-block">
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}

export default Users;
