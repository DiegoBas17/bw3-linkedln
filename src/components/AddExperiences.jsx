import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addExperienceAction } from "../redux/actions/addExperienceAction";

function AddExperiences() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* stato locale per obj per la post */
  const [objExperience, setObjExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  console.log("objExperience", objExperience);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addExperienceAction(objExperience));
    setShow(false);
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    setObjExperience({ ...objExperience, [propertyName]: propertyValue });
  };

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
              <Form.Control
                type="text"
                placeholder="Inserisci il tipo di impiego"
                autoFocus
                onChange={(e) => {
                  handleFieldChange("role", e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci l'azienda"
                onChange={(e) => {
                  handleFieldChange("company", e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Inizio Periodo</Form.Label>
              <Form.Control
                type="date"
                min={new Date().toISOString().split(".")[0].slice(0, -3)}
                onChange={(e) => handleFieldChange("startDate", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>Fine Periodo (facoltativo)</Form.Label>
              <Form.Control
                type="date"
                min={new Date().toISOString().split(".")[0].slice(0, -3)}
                onChange={(e) => handleFieldChange("endDate", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrivi la tua esperienza"
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Area">
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Luogo"
                onChange={(e) => handleFieldChange("area", e.target.value)}
                required
              />
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
