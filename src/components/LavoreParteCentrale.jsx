import { useEffect } from "react";
import { Card, Container, Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchLavoro } from "../redux/actions/lavoroLista";

const LavoroParteCentrale = () => {
  const lavoro = useSelector((state) => state.lavoroLista.lavoro);

  console.log(lavoro);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLavoro());
  }, []);
  return (
    <Container>
      <Form className="nav-search mb-3">
        <InputGroup>
          <InputGroup.Text
            id="search-icon"
            className="search-input pe-2"
            style={{ backgroundColor: "#EDF3F8" }}
          >
            <Search />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Cerca per qualifica, competenze o azioni"
            className="ps-0 py-2 search-input border-start-0 nav-search-bar"
            aria-label="search"
            aria-describedby="search-icon"
            style={{ backgroundColor: "#EDF3F8" }}
          />
        </InputGroup>
      </Form>

      <Card>
        <h3>Le principali offerte di lavoro per te</h3>
        <p>
          Sulla base del tuo profilo e della tua cronologia delle ricerche
        </p>{" "}
        {lavoro.map((lavoro) => {
          return (
            <Card.Body key={lavoro._id}>
              <Card.Title>{lavoro.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Azienda</Card.Subtitle>
              <Card.Text>Località</Card.Text>
              <Card.Link href="#">Promosso</Card.Link>
              <Card.Link href="#">Candidatura semplice</Card.Link>
            </Card.Body>
          );
        })}
      </Card>
    </Container>
  );
};

export default LavoroParteCentrale;
