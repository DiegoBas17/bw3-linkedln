import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import AnalisiProfile from "./AnalisiProfile";
import RisorseProfile from "./RisorseProfile";
import AttivityProfile from "./AttivityProfile";
import FormazioneProfile from "./FormazioneProfile";
import LicenzeCertificazioniProfile from "./LicenzeCertificazioniProfile";
import EsperienzaProfile from "./Esperienzaprofile";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { API_KEY, getUserAction } from "../redux/actions/getUserAction";

const CentralProfile = () => {
  const userMe = useSelector((state) => state.user.userObj);
  const userSelected = useSelector((state) => state.otherUsers.userSelected);
  const user = userSelected ? userSelected : userMe;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const fetchForProfileImage = (userId) => {
    const formData = new FormData();
    formData.append("profile", selectedFile);
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("Immagine aggiunta con successo!");
          dispatch(getUserAction());
        } else {
          throw new Error("Errore nel reperimento del img");
        }
      })
      .catch((err) => alert(err));
  };
  const handleSave = (e) => {
    e.preventDefault();
    fetchForProfileImage(userMe._id);
    setShow(false);
  };

  return (
    <>
      {user && (
        <Col>
          <main>
            <Container>
              <div className="border border-1 rounded-3 mt-2 bg-white">
                <div>
                  <div className="position-relative">
                    {userSelected ? (
                      <></>
                    ) : (
                      <div
                        id="editSmallContainer"
                        className="position-absolute top-0 end-0 rounded-circle bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="20"
                          height="20"
                          id="edit-small"
                          aria-hidden="true"
                          role="none"
                          fill="#0a66c2"
                        >
                          <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z" />
                        </svg>
                      </div>
                    )}
                    <img
                      src="https://media.licdn.com/dms/image/D4D16AQF7ByGyAQKP-w/profile-displaybackgroundimage-shrink_350_1400/0/1714930916758?e=1726704000&v=beta&t=siLnRYZkPUVTQiJBfr4CFBHVw0FGxN8b52ftOXkIV_o"
                      alt="foto-sfondo"
                      className="w-100 rounded-top"
                    />
                    <div className="position-absolute bottom-0 start-0">
                      <img
                        id="imgProfilePageProfile"
                        src={user.image}
                        alt="foto-profilo"
                        className="rounded-circle border border-5 border-white object-fit-cover"
                        style={{ height: "12rem", width: "12rem" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-5 ">
                  {userSelected ? (
                    <></>
                  ) : (
                    <div id="editMedium" className="ms-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        height="24px"
                        width="24px"
                        id="edit-medium"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        onClick={handleShow}
                      >
                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h1 className="mt-1">
                    {user.name} {user.surname}
                  </h1>
                  <h3>{user.title}</h3>
                  <span>{user.area} &middot;</span>
                  <span>
                    <a href="#" className="text-decoration-none">
                      Infomazioni di contatto
                    </a>
                  </span>
                  <p>36 collegamenti</p>
                  <div>
                    <Button variant="primary" className="rounded-pill me-1">
                      Disponibile per
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill mx-1"
                    >
                      Aggiungi seione del profilo
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="rounded-pill ms-1"
                    >
                      Altro
                    </Button>
                  </div>
                </div>
              </div>
              {userSelected ? (
                <></>
              ) : (
                <>
                  <AnalisiProfile />
                  <RisorseProfile />
                </>
              )}
              <AttivityProfile />
              <EsperienzaProfile />
              <FormazioneProfile />
              <LicenzeCertificazioniProfile />
            </Container>
          </main>
        </Col>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MODIFICA IMMAGINE DEL PROFILO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="Immagine">
              <Form.Control type="file" onChange={onChangeFile} />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <div>
                <Button variant="danger">Elimina</Button>
              </div>
              <div>
                <Button variant="secondary" onClick={handleClose}>
                  Chiudi
                </Button>
                <Button className="ms-2" type="submit" variant="primary">
                  Salva Modifica
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CentralProfile;
