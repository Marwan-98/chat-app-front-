import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllConversations, newGroup } from "../../api";
import { RootState } from "../../redux/store";

function GroupModal({ show, handleClose }: { show: boolean, handleClose: Function }) {

  const [participants, setParticipants] = useState<number[]>([])

  const meUser = useSelector((state: RootState) => state.user.user);
  const users = useSelector((state: RootState) => state.users.users).filter((user) => user.id !== meUser!.id);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      newGroup(values.title, participants, meUser!.id).then(() => {
        getAllConversations(meUser!.email, dispatch)
      }).catch((err) => {
        window.location.href = "/login";
      })
    }
  })

  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Group</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Group Title</Form.Label>
              <Form.Control type="text" placeholder="Group Title" name="title" value={formik.values.title} onChange={formik.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Users</Form.Label>
              {users.map((user) => {
                return (
                  <Form.Check type="checkbox" label={`${user.firstName}`} onClick={() => setParticipants(participants => [...participants, user.id])} key={user.id} />
                )
              })}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => handleClose()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default GroupModal