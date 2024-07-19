import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector((state) => state.getComments.list);
  return (
    <Container>
      <List.Group>
        {comments.map((comment) => (
          <List.Items key={comment._id}>
            <div>{comment.author}</div>
            <div>{comment.comment}</div>
          </List.Items>
        ))}
      </List.Group>
    </Container>
  );
};
export default CommentList;
