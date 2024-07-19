import { Container } from "react-bootstrap";

import { useSelector } from "react-redux";

const CommentList = ({ post }) => {
  const comments = useSelector((state) => state.getComments.list);

  return (
    <Container>
      <div>
        {post &&
          comments
            .filter((commento) => commento._id === post._id)
            .map((comment, index) => (
              <div key={index}>
                <div>{comment.author}</div>
                <div>{comment.comment}</div>
              </div>
            ))}
      </div>
    </Container>
  );
};
export default CommentList;
