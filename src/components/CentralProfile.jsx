import { Button, Col, Container } from "react-bootstrap";
import AnalisiProfile from "./AnalisiProfile";
import RisorseProfile from "./RisorseProfile";
import AttivityProfile from "./AttivityProfile";
import FormazioneProfile from "./FormazioneProfile";

const CentralProfile = () => {
  return (
    <Col>
      <main>
        <Container>
          <div className="border border-1 rounded-3 mt-2 bg-white">
            <div>
              <div className="position-relative">
                <div
                  id="editSmallContainer"
                  className="position-absolute top-0 end-0 rounded-circle bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    id="edit-small"
                    aria-hidden="true"
                    role="none"
                    fill="#0a66c2"
                  >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z" />
                  </svg>
                </div>
                <img
                  src="https://media.licdn.com/dms/image/D4D16AQF7ByGyAQKP-w/profile-displaybackgroundimage-shrink_350_1400/0/1714930916758?e=1726704000&v=beta&t=siLnRYZkPUVTQiJBfr4CFBHVw0FGxN8b52ftOXkIV_o"
                  alt="foto-sfondo"
                  className="w-100 rounded-top"
                />
                <div className="position-absolute bottom-0 start-0">
                  <img
                    id="imgProfilePageProfile"
                    src="https://media.licdn.com/dms/image/D4D03AQGPBet-PkxJRQ/profile-displayphoto-shrink_400_400/0/1714930970528?e=1726704000&v=beta&t=YDqDMB14RMD9TOnICDlNwGb6tsVA-ZBVp7LwHlTMiuY"
                    alt="foto-profilo"
                    className="rounded-circle border border-5 border-white"
                  />
                </div>
              </div>
            </div>
            <div className="pt-5 ">
              <div id="editMedium" className="ms-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  id="edit-medium"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="24x24"
                  fill="currentColor"
                >
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" />
                </svg>
              </div>
            </div>
            <div className="p-3">
              <h1 className="mt-1">nome del profilo</h1>
              <h3>che roba fa</h3>
              <span>Luogo &middot;</span>
              <span>
                <a href="#" className="text-decoration-none">
                  Infomazioni di contatto
                </a>
              </span>
              <p>36 collegamenti</p>
              <div>
                <Button variant="primary" className="rounded-pill me-1">
                  Disponibile per
                </Button>
                <Button variant="outline-primary" className="rounded-pill mx-1">
                  Aggiungi seione del profilo
                </Button>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill ms-1"
                >
                  Altro
                </Button>
              </div>
            </div>
          </div>
          <AnalisiProfile />
          <RisorseProfile />
          <AttivityProfile />
          <FormazioneProfile />
        </Container>
      </main>
    </Col>
  );
};
export default CentralProfile;
