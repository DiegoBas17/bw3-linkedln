import { Col, Dropdown } from "react-bootstrap";
import CreaPost from "./CreaPost";
import NotizieHome from "./NotizieHome";

const CentralMain = () => {
  return (
    <Col md={6}>
      <CreaPost />
      <div className="m-3 d-flex">
        <div>
          <p className="mb-0 me-auto">Seleziona la visualizzazione del feed:</p>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            className="btn-light btn-link text-decoration-none text-black border-0 p-0 pb-1 ps-1"
            d="dropdown-basic"
          >
            Più Rilevanti per primi
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Più Rilevanti per primi
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Più recnti per primi
            </Dropdown.Item>

            <p className="ms-2">
              Questa opzione influirà soltanto sulla visualizzazione del tuo
              feed attuale su questo dispositivo. Puoi modificare la
              visualizzazione predefinita nelle Impostazioni.
            </p>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <NotizieHome />
    </Col>
  );
};
export default CentralMain;
