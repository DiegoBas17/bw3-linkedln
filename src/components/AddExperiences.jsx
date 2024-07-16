import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addExperienceAction } from "../redux/actions/addExperienceAction";

function AddExperiences() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addExperienceAction());
  }, [dispatch]);

  return (
    <>
      <Plus size={35} className="content-buttons me-4" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AGGIUNGI ESPERIENZA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Tipo di impiego</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il tipo di impiego" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Azienda</Form.Label>
              <Form.Control type="text" placeholder="Inserisci l'azienda" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Sdate">
              <Form.Label>Inizio Periodo</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Edate">
              <Form.Label>Fine Periodo (facoltativo)</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control type="text" placeholder="Descrivi la tua esperienza" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Area">
              <Form.Label>Luogo</Form.Label>
              <Form.Control type="text" placeholder="Luogo" />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
            <Button type="submit" variant="primary">
              Salva
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
}

export default AddExperiences;
