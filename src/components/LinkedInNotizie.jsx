import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container } from "react-bootstrap";
import { Info } from "react-bootstrap-icons";

const LinkedInNotizie = () => {
  return (
    <Container>
      <Col md={3} className="border border-secondary rounded-3">
        <div className="d-flex justify-content-between">
          <div>
            <h2>LinkedIn Notizie</h2>
          </div>
          <div>
            <Info />
          </div>
        </div>
        <div className="d-flex flex-column align-items-start">
          <h3 className="text-secondary">Storie principali</h3>
          <div>
            <h5 className="text-truncate">Semaforo giallo per il talento elettrico</h5>
            <p className="text-secondary">Notizie principali</p>
          </div>
          <div>
            <h5 className="text-truncate">I leader condannano l&rsquo;attentato a Trump</h5>
          </div>
        </div>
      </Col>
    </Container>
  );
};
export default LinkedInNotizie;
