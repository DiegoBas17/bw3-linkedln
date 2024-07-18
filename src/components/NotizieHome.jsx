import { useDispatch, useSelector } from "react-redux";
import { fetchPostNotizieAction } from "../redux/actions/arrayPostHomeAction";
import { useEffect } from "react";
import { Trash3 } from "react-bootstrap-icons";

const NotizieHome = () => {
  const dispatch = useDispatch();
  const arrayPostNotizie = useSelector(
    (state) => state.arrayPostHome.arrayPost
  );
  const userMe = useSelector((state) => state.user.userObj);
  const userMeId = userMe?._id;
  useEffect(() => {
    dispatch(fetchPostNotizieAction());
  }, [dispatch]);

  const timeTrascorso = (dataISO) => {
    const specificDate = new Date(dataISO);
    const currentDate = new Date();
    const diffInMillis = currentDate - specificDate;
    const diffInSeconds = Math.floor(diffInMillis / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays > 0) {
      return `${diffInDays} giorni`;
    } else if (diffInHours > 0) {
      return `${diffInHours} ore`;
    } else {
      return `${diffInMinutes} minuti`;
    }
  };

  return (
    <div>
      {arrayPostNotizie.toReversed().map((post, index) => {
        return (
          <div
            key={index}
            className="p-3 border border-1 rounded-3 mt-3 bg-white"
          >
            <div className="d-flex justify-content-between align-items-center">
              <h5>{post.username}</h5>
              {userMeId === post.user._id && (
                <div>
                  <div className="d-inline me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="21px"
                      width="21px"
                      id="edit-small"
                      aria-hidden="true"
                      role="none"
                      data-supported-dps="16x16"
                      fill="currentColor"
                    >
                      <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z" />
                    </svg>
                  </div>
                  <Trash3 fill="red" />
                </div>
              )}
            </div>
            <img src={post.user?.image} alt="" height={25} />
            <p>
              {timeTrascorso(post.createdAt)}
              &middot;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z" />
              </svg>
            </p>
            <p>{post.text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default NotizieHome;
