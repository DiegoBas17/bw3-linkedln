import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import CommentList from "./CommentList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCommentAction } from "../redux/actions/addCommentAction";

const CreaCommento = ({ post }) => {
  const [comment, setComment] = useState("");
  const userMe = useSelector((state) => state.user.userObj);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCommentAction(post._id, comment));
    console.log(post._id);
    console.log(comment);
    setComment("");
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
          <Form onSubmit={handleSubmit}>
            <Form.Control
              value={comment}
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              required
              placeholder="Aggiungi un commento..."
            />
          </Form>
        </div>
      </div>
      <CommentList post={post} />
    </Container>
  );
};
export default CreaCommento;
