import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  CalendarEvent,
  ImageFill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { API_KEY } from "../redux/actions/getUserAction";
import { fetchPostNotizieAction } from "../redux/actions/arrayPostHomeAction";

const CreaPost = () => {
  const user = useSelector((state) => state.user.userObj);
  const userId = user?._id;
  const [newpost, setNewpost] = useState("");
  const dispatch = useDispatch();

  const fetchForPostNotizie = (post) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("Commento aggiunto con successo!");
          dispatch(fetchPostNotizieAction());
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .catch((err) => alert(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchForPostNotizie({ text: newpost });
    setNewpost("");
  };
  return (
    <>
      {userId && (
        <div className="rounded-2 bg-white p-3 border border-2">
          <Row className="align-items-center g-2">
            <Col xs="auto">
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
            <Col>
              <div className="rounded-pill border border-1 p-2 border-secondary mx-2">
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    placeholder="Crea un post"
                    className="border border-0"
                    value={newpost}
                    onChange={(e) => {
                      setNewpost(e.target.value);
                    }}
                  />
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
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
