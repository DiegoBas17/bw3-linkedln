import { Col, Form, Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  CalendarEvent,
  ImageFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const CreaPost = () => {
  const user = useSelector((state) => state.user.userObj);
  const userId = user?._id;

  return (
    <>
      {userId && (
        <div className="rounded-2 bg-white m-3 p-3 border border-2">
          <Row className="align-items-center g-2">
            <Col xs="2" sm="1">
              <Link to={"/profile/" + userId}>
                <img
                  src={user?.image}
                  alt="fotoProfilo"
                  className="rounded-circle text-center
            "
                  style={{ width: "54px" }}
                />
              </Link>
            </Col>
            <Col xs="10" sm="11">
              <div className="rounded-pill border border-1 p-2 border-secondary mx-2">
                <Form.Control
                  placeholder="Username"
                  className="border border-0"
                />
              </div>
            </Col>
            <Col md="5">
              <div>
                <ImageFill fill="#378FE9" />
                <p className="ms-1 mb-0 d-inline">Contenuti multimediali</p>
              </div>
            </Col>
            <Col md="3">
              <CalendarEvent fill="#C37D16" />
              <p className="ms-1 mb-0 d-inline">Evento</p>
            </Col>
            <Col md="4">
              <BlockquoteLeft fill="#E06847" />
              <p className="ms-1 mb-0 d-inline">Scrivi un articolo</p>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
export default CreaPost;
