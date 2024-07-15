import { Col, Form, Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  CalendarEvent,
  ImageFill,
} from "react-bootstrap-icons";

const CreaPost = () => {
  return (
    <div className="rounded-2 bg-white m-3 p-3 border border-2">
      <Row className="align-items-center g-2">
        <Col xs="2" sm="1">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGPBet-PkxJRQ/profile-displayphoto-shrink_400_400/0/1714930970528?e=1726704000&v=beta&t=YDqDMB14RMD9TOnICDlNwGb6tsVA-ZBVp7LwHlTMiuY"
            alt="fotoProfilo"
            className="rounded-circle text-center
            "
            style={{ width: "54px" }}
          />
        </Col>
        <Col xs="10" sm="11">
          <div className="rounded-pill border border-1 p-2 border-secondary mx-2">
            <Form.Control placeholder="Username" className="border border-0" />
          </div>
        </Col>
        <Col md="5">
          <div>
            <ImageFill fill="#378FE9" />
            <p className="ms-1 mb-0 d-inline">Contenuti multimediali</p>
          </div>
        </Col>
        <Col md="3">
          <CalendarEvent fill="#C37D16" />
          <p className="ms-1 mb-0 d-inline">Evento</p>
        </Col>
        <Col md="4">
          <BlockquoteLeft fill="#E06847" />
          <p className="ms-1 mb-0 d-inline">Scrivi un articolo</p>
        </Col>
      </Row>
    </div>
  );
};
export default CreaPost;
