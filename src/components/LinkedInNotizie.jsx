import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { Info } from "react-bootstrap-icons";

const LinkedInNotizie = () => {
  return (
    <Container className=" mt-3">
      <Row>
        <Col md={3} className="border border-secondary rounded-3">
          <div className="d-flex justify-content-between ">
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
              <p className="text-secondary">4 ore fa</p>
            </div>
            <div>
              <h5 className="text-truncate">Cambio al vertice di Telethon</h5>
              <p className="text-secondary">2 ore fa</p>
            </div>
            <div>
              <h5 className="text-truncate">Bbva lancia i suoi mutui in Italia</h5>
              <p className="text-secondary">3 ore fa</p>
            </div>
            <div>
              <h5 className="text-truncate">PizzAut moltiplica i suoi truckfood</h5>
              <p className="text-secondary">5 giorni fa</p>
            </div>
            <div>
              <p>
                Vedi altro
                <span className="ms-2">
                  <ChevronCompactDown />
                </span>
              </p>
            </div>
            <div>
              <h4 className="text-truncate">
                I giochi di oggi <span className="bg-warning rounded-1 px-2">NOVITA&rsquo;</span>
              </h4>
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LinkedInNotizie;
