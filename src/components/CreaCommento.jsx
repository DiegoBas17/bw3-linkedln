import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import CommentList from "./CommentList";
import { useSelector } from "react-redux";

const CreaCommento = () => {
  const [comment, setComment] = useState("");
  const userMe = useSelector((state) => state.user.userObj);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="d-flex">
        <div className="ounded-circle overflow-hidden">
          <img
            src={userMe.image}
            alt=""
            style={{ height: "2.4rem", width: "2.4rem", overflow: "hidden" }}
          />
        </div>
        <div>
          <Form onSubmit={() => handleSubmit}>
            <Form.Control
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              required
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
