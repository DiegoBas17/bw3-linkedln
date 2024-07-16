import {
  Button,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  BarChartFill,
  BriefcaseFill,
  Bullseye,
  CartDashFill,
  Compass,
  PeopleFill,
  PlayBtnFill,
  Search,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_USER_SELECTED } from "../redux/actions/getOtherUsersAction";

function TopNavbar() {
  const dispatch = useDispatch();
  return (
    <Navbar
      className="bg-body-tertiary "
      style={{ height: "80px", zIndex: 99 }}
    >
      <Container>
        <NavLink to="/" className="navbar-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0966C2"
            width="45"
            height="45"
            onClick={() => {
              dispatch({
                type: GET_USER_SELECTED,
                payload: null,
              });
            }}
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </NavLink>
        <Form className="nav-search">
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
              placeholder="Cerca"
              className="ps-0 py-2 search-input border-start-0 nav-search-bar"
              aria-label="search"
              aria-describedby="search-icon"
              style={{ backgroundColor: "#EDF3F8" }}
            />
          </InputGroup>
        </Form>

        <Nav className="mx-md-auto text-center d-flex align-items-center ">
          <NavLink
            to="/"
            className="d-flex flex-column align-items-center nav-link"
            onClick={() => {
              dispatch({
                type: GET_USER_SELECTED,
                payload: null,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <small className="d-none d-lg-block">Home</small>
          </NavLink>
          <NavLink
            to="/rete"
            className="d-flex flex-column align-items-center nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <small className="d-none d-lg-block">Rete</small>
          </NavLink>
          <NavLink
            to="/lavoro"
            className="d-flex flex-column align-items-center nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <small className="d-none d-lg-block">Lavoro</small>
          </NavLink>
          <NavLink
            to="/messaggistica"
            className="d-flex flex-column align-items-center nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <small className="d-none d-lg-block">Messaggistica</small>
          </NavLink>
          <NavLink
            to="/notifiche"
            className="d-flex flex-column align-items-center nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <small className="d-none d-lg-block">Notifiche</small>
          </NavLink>

          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://thispersondoesnotexist.com/"
                  alt="profile pic"
                  className="rounded-circle mb-1 nav-bar-propic"
                  style={{ height: "24px", width: "24px" }}
                />
                <small className="d-none d-lg-block">Tu</small>
              </div>
            }
            className="border-end border-1 d-none d-sm-block p-0"
            id="mdProfileDropdown"
            drop="down"
          >
            <NavDropdown.Item>
              <NavLink to="/" className="text-decoration-none">
                <div className="d-flex flex-column border-bottom">
                  <div className="d-flex">
                    <Button
                      variant="outline-primary"
                      className="rounded-pill px-lg-3 py-0 w-100 my-3 "
                    >
                      View profile
                    </Button>
                  </div>
                </div>
              </NavLink>
            </NavDropdown.Item>
            <div className="mx-3 border-bottom mb-3">
              <h5>Account</h5>
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-link text-secondary"
              >
                Impostazioni e Privacy
              </p>
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-link text-secondary"
              >
                Aiuto
              </p>
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-link text-secondary"
              >
                Lingua
              </p>
            </div>
            <div className="mx-3 border-bottom mb-3">
              <h5>Gestisci</h5>
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-link text-secondary"
              >
                Post e Attività
              </p>
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-link text-secondary"
              >
                Account per la pubblicazione
              </p>
            </div>
            <div className="mx-3">
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-link text-secondary"
              >
                Sign Out
              </p>
            </div>
          </NavDropdown>

          <NavDropdown
            className="dropdown-nav-menu d-none d-sm-block ms-2"
            id="mdBusinessDropdown"
            drop="start"
            title={
              <div className="d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <small className="d-none d-lg-block">Per le aziende</small>
              </div>
            }
          >
            <div className="dropdownMenu d-flex flex-row gap-4 p-5 ">
              <div className="dropdownMenu_1 border-end ">
                <h5>Scopri altri prodotti LinkedIn </h5>
                <div className="d-flex align-items-center">
                  <Compass fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.1">
                    Trova lead
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <PeopleFill fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.2">Gruppi</NavDropdown.Item>
                </div>

                <p className="mb-0 text-secondary">Talent</p>
                <div className="d-flex align-items-center">
                  <BarChartFill fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.1">
                    Talent Inside
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <BriefcaseFill fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.2">
                    Pubblica un&rsquo offerta di lavoro
                  </NavDropdown.Item>
                </div>

                <p className="mb-0 text-secondary">Vendite</p>
                <div className="d-flex align-items-center mb-3">
                  <CartDashFill fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.1">
                    Marketplace dei Servizi
                  </NavDropdown.Item>
                </div>

                <p className="mb-0 text-secondary">Marketing</p>
                <div className="d-flex align-items-center mb-3">
                  <Bullseye fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.1">
                    Pubblicizza
                  </NavDropdown.Item>{" "}
                </div>

                <p className="mb-0 text-secondary">Learning</p>
                <div className="d-flex align-items-center mb-3">
                  <PlayBtnFill fill="#0A66C2" />
                  <NavDropdown.Item href="#action/3.1">
                    Learning
                  </NavDropdown.Item>
                </div>
              </div>

              <div>
                <h5>Scopri altro per il business</h5>
                <div className="mb-3">
                  <p className="mb-0">Assumi con LinkedIn</p>
                  <p className="fw-lighter text-secondary">
                    Trova, attrai e assumi
                  </p>
                </div>
                <div className="mb-3">
                  <p className="mb-0">Vendi con LinkedIn</p>
                  <p className="fw-lighter text-secondary">
                    Sblocca nuove opportunità di vendita
                  </p>
                </div>
                <div className="mb-3">
                  <p className="mb-0">Offerta di lavoro gratuita</p>
                  <p className="fw-lighter text-secondary">
                    Ottieni rapidamente camndidati qualificati
                  </p>
                </div>
                <div className="mb-3">
                  <p className="mb-0">Fai pubblicità con LinkedIn</p>
                  <p className="fw-lighter text-secondary">
                    Acquisisci clientie fai crescere la tua azienda
                  </p>
                </div>
                <div className="mb-3">
                  <p className="mb-0">Impara con LinkedIn</p>
                  <p className="fw-lighter text-secondary">
                    Assumi su LinkedIn
                  </p>
                </div>
                <div className="mb-5">
                  <p className="mb-0">Admin Center</p>
                  <p className="fw-lighter text-secondary">
                    Gestisci i dettagli di fatturazionee account
                  </p>
                </div>
                <h5>Crea una pagina aziendale +</h5>
              </div>
            </div>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
