import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { editExperienceAction } from "../redux/actions/editExperieceAction";
import { useEffect } from "react";
import deleteExperienceAction from "../redux/actions/deleteExperienceAction";
import { getExperiencesAction } from "../redux/actions/getExperiecesAction";
import { key } from "../redux/actions/getUserAction";

const EditExperiences = ({ experience }) => {
  const [show, setShow] = useState(false);
  const userMe = useSelector((state) => state.user.userObj);
  const userSelected = useSelector((state) => state.otherUsers.userSelected);
  const user = userSelected ? userSelected : userMe;
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
  const [selectedFile, setSelectedFile] = useState(null);
  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const fetchForExperienceImage = (userId, expId) => {
    const formData = new FormData();
    formData.append("experience", selectedFile);
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + key,
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          alert("Immagine aggiunta con successo!");
          dispatch(getExperiencesAction(user._id));
        } else {
          throw new Error("Errore nel reperimento del img");
        }
      })
      .catch((err) => alert(err));
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editExperienceAction(experienceObj, experience));
    fetchForExperienceImage(userMe._id, experience._id);
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
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
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
            <Form.Group className="mb-3" controlId="Immagine">
              <Form.Label>Aggiungi Immagine</Form.Label>
              <Form.Control type="file" onChange={onChangeFile} />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <div>
                <Button
                  onClick={() => handleDelete(experience._id)}
                  variant="danger"
                >
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
      </Modal>
    </>
  );
};

export default EditExperiences;
