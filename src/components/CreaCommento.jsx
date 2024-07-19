import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import CommentList from "./CommentList";
import { useSelector } from "react-redux";

const CreaCommento = ({ post }) => {
  const [comment, setComment] = useState("");
  const userMe = useSelector((state) => state.user.userObj);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="d-flex">
        <div className="rounded-circle overflow-hidden me-2">
          {userMe && (
            <img
              src={userMe.image}
              alt=""
              style={{ height: "2.4rem", width: "2.4rem", overflow: "hidden" }}
            />
          )}
        </div>
        <div className="w-100">
          <Form.Control
            value={comment}
            type="text"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            required
            placeholder="Aggiungi un commento..."
            onClick={() => handleSubmit}
          />
        </div>
      </div>
      <CommentList post={post} />
    </Container>
  );
};
export default CreaCommento;
