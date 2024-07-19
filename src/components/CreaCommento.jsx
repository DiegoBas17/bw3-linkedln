import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import CommentList from "./CommentList";

const CreaCommento = ({ user }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="d-flex">
        <div>
          <img src={user.image} alt="" /> {/* foto del profilo */}
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              required
              type="text"
              placeholder="Aggiungi un commento..."
            />
          </Form>
        </div>
        <CommentList />
      </div>
    </Container>
  );
};
export default CreaCommento;
