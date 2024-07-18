import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Button, Container } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_USER_SELECTED, getOtherUsersAction } from "../redux/actions/getOtherUsersAction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileRightSidebar = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.otherUsers.list);

  useEffect(() => {
    dispatch(getOtherUsersAction());
  }, []);

  console.log(users);

  return (
    <>
      <Container className="sidebar-profile rounded-2 mt-2 bg-white">
        <div className="d-flex justify-content-between border-bottom mt-2 ">
          <div>
            <h4>Lingua del profilo</h4>
            <p className="text-secondary">Italiano</p>
          </div>
          <div>
            <Pencil />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <h4>Profilo pubblico e URL</h4>
            <p className="text-secondary">www.linkedin.com...</p>
          </div>
          <div>
            <Pencil />
          </div>
        </div>
      </Container>
      {/* inserzione pubblicità */}
      <Container className="sidebar-profile rounded-2 mt-2 px-0">
        <div className="right-side-profile">
          <img
            className="rounded-2"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="hiring on LinkedIn"
          />
        </div>
      </Container>
      {/* ALTRI UTENTI */}
      <Container className="sidebar-profile rounded-2 mt-2 mb-2 bg-white">
        <div>
          <h4>Altri profili simili</h4>
        </div>
        {/* utente 1 */}
        {users.slice(0, 5).map((user) => (
          <div className="d-flex 2 border-bottom mt-2" key={user._id}>
            <div>
              <img src={user.image} alt="" width={45} />
            </div>
            <div>
              <div className="ms-2 mb-2">
                <Link
                  to={"/profile/" + user._id}
                  onClick={() => {
                    dispatch({
                      type: GET_USER_SELECTED,
                      payload: user,
                    });
                  }}
                >
                  {user.name} {user.surname}
                </Link>
                <span> &middot; 2&deg;</span>
                <p>{user.title}</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <Plus />
                  <strong>Segui</strong>
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div>
          <p className="text-center pt-2">Mostra tutto</p>
        </div>
      </Container>
      {/* inserzione pubblicità */}
      <Container className="sidebar-profile rounded-2 mt-2 px-0 inserzione-pubb">
        <div className="right-side-profile">
          <img
            className="rounded-2"
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="hiring on LinkedIn"
          />
        </div>
      </Container>
    </>
  );
};
export default ProfileRightSidebar;
