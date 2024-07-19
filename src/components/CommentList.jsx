import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCommentsAction } from "../redux/actions/getCommentsAction";

const CommentList = () => {
  const comments = useSelector((state) => state.getComments.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsAction());
  });

  console.log(comments);
  return (
    <Container>
      {/* <List.Group>
        {comments.map((comment) => (
          <List.Items key={comment._id}>
            <div>{comment.author}</div>
            <div>{comment.comment}</div>
          </List.Items>
        ))}
      </List.Group> */}
    </Container>
  );
};
export default CommentList;
