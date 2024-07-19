import { Trash3 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentAction } from "../redux/actions/addCommentAction";

const CommentList = ({ post }) => {
  const comments = useSelector((state) => state.getComments.list);
  const dispatch = useDispatch();
  const handleDelete = (elementId) => {
    dispatch(deleteCommentAction(elementId));
  };

  return (
    <div className="p-3 border border-1 rounded-3 mt-3 bg-white">
      {post &&
        comments
          .filter((commento) => commento.elementId === post._id)
          .map((comment, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between">
                <div>
                  <div>{comment.author}</div> <div>{comment.comment}</div>
                </div>
                <div onClick={() => handleDelete(comment.elementId)}>
                  <Trash3 fill="red" />
                </div>
              </div>
              <hr />
            </div>
          ))}
    </div>
  );
};
export default CommentList;
