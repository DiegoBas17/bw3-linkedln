import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  CalendarEvent,
  ImageFill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPostNotizieAction } from "../redux/actions/arrayPostHomeAction";
import { key } from "../redux/actions/getUserAction";

const CreaPost = () => {
  const user = useSelector((state) => state.user.userObj);
  const userId = user?._id;
  const [newpost, setNewpost] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchForPostNotizie = (post) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + key,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("Commento aggiunto con successo!");
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .then((data) => {
        if (selectedFile) {
          fetchForPostImage(data._id);
          dispatch(fetchPostNotizieAction());
        }
      })
      .catch((err) => alert(err));
  };
  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const fetchForPostImage = (id) => {
    const formData = new FormData();
    formData.append("post", selectedFile);
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + key,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("Immagine aggiunta con successo!");
          dispatch(fetchPostNotizieAction());
        } else {
          throw new Error("Errore nel reperimento del img");
        }
      })
      .catch((err) => alert(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    fetchForPostNotizie({ text: newpost });
    setNewpost("");
    setSelectedFile(null);
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
                  className="rounded-circle text-center"
                  style={{ width: "3.5rem", height: "3.5rem" }}
                />
              </Link>
            </Col>
            <Col>
              <div
                className="rounded-pill border border-1 p-2 border-secondary mx-2"
                onClick={handleShow}
              >
                <Form.Control
                  placeholder="Crea un post"
                  className="border border-0"
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                autoFocus
                value={newpost}
                onChange={(e) => {
                  setNewpost(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Control type="file" onChange={onChangeFile} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CreaPost;
