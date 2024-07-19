import { useSelector } from "react-redux";

const CommentList = ({ post }) => {
  const comments = useSelector((state) => state.getComments.list);

  return (
    <div className="p-3 border border-1 rounded-3 mt-3 bg-white">
      {post &&
        comments
          .filter((commento) => commento.elementId === post._id)
          .map((comment, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between">
                <div>
                  {/* {post && (
                    <img
                      src={post.user.image}
                      alt=""
                      style={{
                        height: "2.4rem",
                        width: "2.4rem",
                        overflow: "hidden",
                      }}
                    />
                  )} */}
                  <div>{comment.author}</div>
                </div>
                <div>
                  <div>{comment.comment}</div>
                </div>
              </div>
              <hr />
            </div>
          ))}
    </div>
  );
};
export default CommentList;
