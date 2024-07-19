import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";
import { ShieldShaded } from "react-bootstrap-icons";
import { QuestionCircleFill } from "react-bootstrap-icons";
import { CaretDownFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LicenzeCertificazioniProfile = () => {
  return (
    <Container className="footer-notizie mt-5">
      <Row>
        <Col sm={3}>
          <ListGroup>
            <Link className="link-nav">Informazione</Link>
            <Link className="link-nav">Informativa sulla community professionale</Link>
            <Link className="link-nav">
              Privacy e condizioni <CaretDownFill />
            </Link>
            <Link className="link-nav">Sales Solutions</Link>
            <Link className="link-nav">Centro sicurezza</Link>
          </ListGroup>
        </Col>
        <Col sm={3}>
          <ListGroup>
            <Link className="link-nav">Accessibilità</Link>
            <Link className="link-nav">Carriera</Link>
            <Link className="link-nav">Opzioni per gli annunci</Link>
            <Link className="link-nav">Mobile</Link>
          </ListGroup>
        </Col>
        <Col sm={3}>
          <ListGroup>
            <Link className="link-nav">Talent Solutions</Link>
            <Link className="link-nav">Soluzioni di marketing</Link>
            <Link className="link-nav">Pubbliità</Link>
            <Link className="link-nav">Piccole imprese</Link>
          </ListGroup>
        </Col>
        <Col sm={3}>
          <ListGroup>
            <Link className="link-nav d-flex">
              <div>
                <QuestionCircleFill />
              </div>
              <div className="ms-1">
                <strong>Piccole imprese</strong> <br /> <p>Visita il nostro Centro assistenza.</p>
              </div>
            </Link>
            <Link className="link-nav d-flex">
              <div>
                <GearFill />
              </div>
              <div className="ms-1">
                <strong>Gestisci il tuo account e la tua privacy</strong>

                <br />
                <p>Vai alle impostazioni</p>
              </div>
            </Link>
            <Link className="link-nav d-flex">
              <div>
                <ShieldShaded />
              </div>
              <div className="ms-1">
                <strong>Trasparenza sui contenuti cosigliati</strong> <br />
                <p>Scopri di più sui contenuti consigliati.</p>
              </div>
            </Link>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default LicenzeCertificazioniProfile;
