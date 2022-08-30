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
    <Col lg={4} xs={12} className="text-start d-lg-block pt-0 mt-0 pt-lg-3 mt-lg-5">
      <Row className="users-block">
        {users.map((user) => {
          return (
            <Col key={user.id} 
            className="my-lg-1 user"
            xs={1}
            lg={12}
            onClick={() => createConv(user.id, meUser!.id)} 
            style={{ cursor: "pointer", maxHeight: "100px"}}>
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
                  <span>{user.firstName} {user.lastName}</span>
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