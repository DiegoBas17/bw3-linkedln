import { Col, Dropdown } from "react-bootstrap";
import CreaPost from "./CreaPost";

const CentralMain = () => {
  return (
    <Col md="7">
      <main>
        <CreaPost />
        <div className="m-3 d-flex">
          <div className="border border-top border-1"></div>
          <p className="d-inline mb-0">
            Seleziona la visualizzazione del feed:
          </p>
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

              <p>
                Questa opzione influirà soltanto sulla visualizzazione del tuo
                feed attuale su questo dispositivo. Puoi modificare la
                visualizzazione predefinita nelle Impostazioni.
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </main>
    </Col>
  );
};
export default CentralMain;
