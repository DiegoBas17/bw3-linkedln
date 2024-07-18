import { useEffect } from "react";
import { Card, Container, Form, InputGroup } from "react-bootstrap";
import { ArrowRight, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchLavoro } from "../redux/actions/lavoroLista";
import { useState } from "react";
import { searchJobAction } from "../redux/actions/searchJobAction";

const LavoroParteCentrale = () => {
  const lavori = useSelector((state) => state.lavoroLista.lavori);

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchJobAction(query));
  };

  console.log(query);
  console.log(lavori);

  useEffect(() => {
    dispatch(fetchLavoro());
  }, [dispatch]);
  return (
    <Container>
      <Form onSubmit={handleSubmit} className="nav-search my-3">
        <InputGroup>
          <InputGroup.Text id="search-icon" className="search-input pe-2" style={{ backgroundColor: "#EDF3F8" }}>
            <Search />
          </InputGroup.Text>
          <Form.Control
            value={query}
            onChange={handleChange}
            type="text"
            placeholder="Cerca per qualifica, competenze o azioni"
            className="ps-0 py-2 search-input border-start-0 nav-search-bar"
            aria-label="search"
            aria-describedby="search-icon"
            style={{ backgroundColor: "#EDF3F8" }}
          />
        </InputGroup>
      </Form>

      <Card className="mb-4">
        <div className="m-3">
          <h3>Le principali offerte di lavoro per te</h3>
          <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        </div>
        {lavori && lavori.length > 0 ? (
          lavori.slice(0, 10).map((lavoro) => (
            <Card.Body key={lavoro._id}>
              <Card.Title>{lavoro.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{lavoro.company_name}</Card.Subtitle>
              <Card.Text>{lavoro.candidate_required_location}</Card.Text>
              <Card.Link href="#" style={{ textDecoration: "none", color: "gray", fontSize: "0.9rem" }}>
                Promosso
              </Card.Link>
              <Card.Link href="#" style={{ textDecoration: "none", color: "gray", fontSize: "0.9rem" }}>
                Candidatura semplice
              </Card.Link>
              <hr />
            </Card.Body>
          ))
        ) : (
          <div className="m-3">Nessun lavoro trovato.</div>
        )}
        <h5 className="text-center pb-3">
          Mostra tutto <ArrowRight />
        </h5>
      </Card>
    </Container>
  );
};

export default LavoroParteCentrale;
