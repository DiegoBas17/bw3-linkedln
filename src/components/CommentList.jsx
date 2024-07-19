import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector((state) => state.getComments.list);
  console.log(comments);
  return (
    <Container>
      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <div>{comment.author}</div>
            <div>{comment.comment}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default CommentList;
