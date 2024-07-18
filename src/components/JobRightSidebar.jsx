import { Dropdown } from "react-bootstrap";
import { CaretDownFill, Linkedin } from "react-bootstrap-icons";

const JobRightSidebar = () => {
  return (
    <div id="job-right-sidebar" className="ember-view mt-3 ">
      <ul className="global-footer-compact__content global-footer-compact__links list-unstyled">
        <li className="global-footer-compact__item ">
          <a
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://about.linkedin.com/it-it"
            id="compactfooter-about"
            className="ember-view global-footer__link t-12 t-normal text-decoration-none text-secondary"
          >
            <span>Informazioni</span>
          </a>
        </li>
        <li className="global-footer-compact__item ">
          <a
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/accessibility"
            id="compactfooter-accessibility"
            className="ember-view global-footer__link t-12 t-normal text-decoration-none text-secondary"
          >
            <span>Accessibilità</span>
          </a>
        </li>
        <li className="global-footer-compact__item ">
          <a
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_job_home"
            id="compactfooter-help"
            className="ember-view global-footer__link t-12 t-normal text-decoration-none text-secondary"
          >
            <span data-dyn-trk="">Centro assistenza</span>
          </a>
        </li>
        <li className="global-footer-compact__item">
          <Dropdown id="job-right-sidebar">
            <Dropdown.Toggle id="privacy-dropdown-toggle" className="text-decoration-none bg-transparent border-0 text-secondary ">
              <span className="text-align-left">
                Privacy e Condizioni <CaretDownFill />
                <svg
                  role="none"
                  aria-hidden="true"
                  className="global-footer-dropdown__trigger-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="caret-small"
                >
                  <use href="#caret-small" width="16" height="16"></use>
                </svg>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item>
                <strong> Informativa della Privacy</strong>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong> Contratto di licenza</strong>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong> Termini e condizioni delle pagine</strong>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong> Informativa sui Cookie</strong>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong> Informativa sul Copyright</strong>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="global-footer-compact__item ">
          <a
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/help/linkedin/answer/62931?lang=it"
            id="compactfooter-ad_choices"
            className="ember-view global-footer__link t-12 t-normal text-decoration-none text-secondary"
          >
            <span>Opzioni per gli annunci pubblicitari</span>
          </a>
        </li>
        <li className="global-footer-compact__item ">
          <a
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr"
            id="compactfooter-advertising"
            className="ember-view global-footer__link t-12 t-normal text-decoration-none text-secondary"
          >
            <span>Pubblicità</span>
          </a>
        </li>
        <li className="global-footer-compact__item">
          <Dropdown>
            <Dropdown.Toggle id="privacy-dropdown-toggle" className="text-decoration-none bg-transparent border-0 text-secondary">
              <span className="text-align-left">
                Servizi alle aziende <CaretDownFill />
                <svg
                  role="none"
                  aria-hidden="true"
                  className="global-footer-dropdown__trigger-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="caret-small"
                >
                  <use href="#caret-small" width="16" height="16"></use>
                </svg>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item>
                <strong> Fai Pubblicità su LinkedIn</strong>
                <p className="fw-lighter text-secondary">Acquisisci clienti e fai crescere la tua azienda</p>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong> Impara con LinkedIn</strong>
                <p className="fw-lighter text-secondary">Assumi su LinkedIn</p>
              </Dropdown.Item>
              <Dropdown.Item>
                <strong> Admin Center</strong>
                <p className="fw-lighter text-secondary">Gestisci i dettagli di fatturazione e account</p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <strong> Crea una pagina aziendale +</strong>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li className="global-footer-compact__item ">
          <div>
            <div>
              <div id="ember358" className="ember-view"></div>
              <a id="compactfooter-get_app_footer" className="global-footer__link t-12 t-normal text-decoration-none text-secondary" href="#">
                Scarica l’app LinkedIn
              </a>
            </div>
          </div>
        </li>
        <li className="global-footer-compact__item ">
          <a
            id="compactfooter-more"
            className="global-footer__link t-12 t-normal text-decoration-none text-secondary"
            aria-expanded="false"
            aria-label="Altre opzioni"
            href="#"
          >
            Altro
          </a>
        </li>
      </ul>
      <div className="d-flex text-center" id="compactfooter-copyright">
        <div className="d-flex ">
          <strong className="text-primary">Linked</strong>
          <Linkedin className="mt-1" fill="#0A66C2" />
          LinkedIn Corporation © 2024
        </div>
      </div>
      <div id="ember346" className="ember-view"></div>
    </div>
  );
};

export default JobRightSidebar;
