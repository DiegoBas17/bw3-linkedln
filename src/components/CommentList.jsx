//import { useEffect } from "react";
import { Container } from "react-bootstrap";
//import { List } from "react-bootstrap-icons";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import { getCommentsAction } from "../redux/actions/getCommentsAction";

const CommentList = ({ post }) => {
  const comments = useSelector((state) => state.getComments.list);
  //const dispatch = useDispatch();
  /* 
  useEffect(() => {
    dispatch(getCommentsAction());
  }, []); */

  return (
    <Container>
      <div>
        {comments
          .filter((commento) => post._id === commento._id)
          .map((comment) => (
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
