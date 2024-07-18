import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { editExperienceAction } from "../redux/actions/editExperieceAction";
import { useEffect } from "react";
import deleteExperienceAction from "../redux/actions/deleteExperienceAction";

const EditExperiences = ({ experience }) => {
  const [show, setShow] = useState(false);

  const [experienceObj, setExperienceObj] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (experience) {
      setExperienceObj(experience);
    }
  }, [experience]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    e.preventDefault();

    //const formData = new FormData();
    //Object.keys(experienceObj).forEach((key) => {
    //  formData.append(key, experienceObj[key]);
    //});
    dispatch(editExperienceAction(experienceObj, experience));
    //dispatch(editExperienceAction(formData));
    setShow(false);
  };

  const handleDelete = (experienceId) => {
    dispatch(deleteExperienceAction(experienceId));
    setShow(false);
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    setExperienceObj({ ...experienceObj, [propertyName]: propertyValue });
  };

  return (
    <>
      <Pencil size={25} className="content-buttons me-4" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MODIFICA ESPERIENZA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Tipo di impiego</Form.Label>
              <Form.Control
                value={experienceObj.role}
                onChange={(e) => handleFieldChange("role", e.target.value)}
                type="text"
                placeholder="Inserisci il tipo di impiego"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                value={experienceObj.company}
                onChange={(e) => ("company", e.target.value)}
                type="text"
                placeholder="Inserisci l'azienda"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Inizio Periodo</Form.Label>
              <Form.Control
                /*  value={experience.startDate} */
                min={new Date().toISOString().split(".")[0].slice(0, -3)}
                onChange={(e) => ("startDate", e.target.value)}
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>Fine Periodo (facoltativo)</Form.Label>
              <Form.Control
                min={new Date().toISOString().split(".")[0].slice(0, -3)}
                onChange={(e) => handleFieldChange("endDate", e.target.value)}
                /* value={experience.endDate} */
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                value={experienceObj.description}
                onChange={(e) => handleFieldChange("description", e.target.value)}
                type="text"
                placeholder="Descrivi la tua esperienza"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Area">
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                value={experienceObj.area}
                onChange={(e) => handleFieldChange("area", e.target.value)}
                type="text"
                placeholder="Luogo"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <div>
                <Button onClick={() => handleDelete(experience._id)} variant="danger">
                  Elimina
                </Button>
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
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default EditExperiences;
