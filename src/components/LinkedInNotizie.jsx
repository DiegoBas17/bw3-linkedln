import { Col, Container, Row } from "react-bootstrap";
import { CaretDownFill } from "react-bootstrap-icons";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { Info } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LinkedInNotizie = () => {
  return (
    <Col md={3}>
      <Container className="rounded-3 sidebar-notizie">
        <div className="d-flex justify-content-between ">
          <div className="my-3 ms-2">
            <h2>LinkedIn Notizie</h2>
          </div>
          <div>
            <Info />
          </div>
        </div>
        <div className="d-flex flex-column align-items-start">
          <h3 className="text-secondary">Storie principali</h3>
          <div>
            <h5>Semaforo giallo per il talento elettrico</h5>
            <p className="text-secondary">Notizie principali</p>
          </div>
          <div>
            <h5>I leader condannano l&rsquo;attentato a Trump</h5>
            <p className="text-secondary">4 ore fa</p>
          </div>
          <div>
            <h5>Cambio al vertice di Telethon</h5>
            <p className="text-secondary">2 ore fa</p>
          </div>
          <div>
            <h5>Bbva lancia i suoi mutui in Italia</h5>
            <p className="text-secondary">3 ore fa</p>
          </div>
          <div>
            <h5>PizzAut moltiplica i suoi truckfood</h5>
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
            <h4>
              I giochi di oggi <span className="bg-warning rounded-1 px-2">NOVITA&rsquo;</span>
            </h4>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Container className="rounded-2 mt-2 px-0 inserzione-pubb">
        <div className="right-side-profile">
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="hiring on LinkedIn"
          />
        </div>
      </Container>
      <Container className="justify-content-center mt-2  footer-notizie">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <Link className="link-nav">Informazione</Link>
            <Link className="ms-3 link-nav">Accessibilità</Link>
            <br />
            <Link className="ms-3 link-nav">Centro assistenza</Link>
            <br />
            <Link className="ms-3 link-nav">
              Privacy e condizioni <CaretDownFill />
            </Link>
            <br />
            <Link className="ms-3 link-nav">Opzioni per gli annunci</Link>
            <br />
            <Link className="ms-3 link-nav">Pubblicità</Link>
            <Link className="ms-3 link-nav">
              Servizi alle aziende <CaretDownFill />
            </Link>
            <br />
            <Link className="ms-3 link-nav">Scarica l&rsquo;app LinkedIn</Link>
            <Link className="ms-3 link-nav">Altro</Link>
            <br />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
export default LinkedInNotizie;
