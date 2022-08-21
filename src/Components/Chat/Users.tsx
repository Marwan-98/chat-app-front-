import { useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllConversations, newCoversation } from "../../api";
import face from "../../Assets/face.jpg";
import { RootState } from "../../redux/store";

function Users({ setLoading }: { setLoading: Function }) {
  const meUser = useSelector((state: RootState) => state.user.user);
  const users = useSelector((state: RootState) => state.users.users).filter((user) => user.id !== meUser!.id);
  const conversations = useSelector((state: RootState) => state.conversations.conversations);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createConv = (userId: number, senderId: number) => {
    setLoading(true);
    for (let i = 0; i < conversations.length; i++) {
      if (conversations[i].users[0].id === userId) {
        return navigate(`/chatPage/${conversations[i].id}`)
      }
    }
    newCoversation(userId, senderId).then(async (response) => {
      await getAllConversations(meUser!.email, dispatch)
      navigate(`/chatPage/${response.data.id}`)
      setLoading(false);
    })
  }


  useEffect(() => {
      getAllConversations(meUser!.email, dispatch)
  }, [])

  return (
    <Col xs={4} className="bg-white text-start" style={{
      minHeight: "100vh",
      maxHeight: "100vh",
      overflowY: "scroll",
      overflowX: "hidden",
    }}>
      <Row>
        {users.map((user) => {
          return (
            <Col xs={12} key={user.id}>
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
                  <p style={{ cursor: "pointer" }} onClick={() => createConv(user.id, meUser!.id)}>Chat</p>
                </Col>
              </Row>
            </Col>
          )
        })}
      </Row>
    </Col>
  );
}

export default Users