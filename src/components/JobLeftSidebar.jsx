import { Button } from "react-bootstrap";

const JobLeftSidebar = () => {
  return (
    <div>
      <div className="d-flex flex-column gap-4 bg-white rounded-3 mt-5 ms-3 p-4">
        <div className="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="40"
            height="40"
            focusable="false"
          >
            <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
          </svg>
          <strong className="text-dark">Le mie offerte di lavoro</strong>
        </div>
        <div className="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="40"
            height="40"
            focusable="false"
          >
            <path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
          </svg>
          <strong className="text-dark">Preferenze</strong>
        </div>
        <div className="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="40"
            height="40"
            focusable="false"
          >
            <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
          </svg>
          <strong className="text-dark">Valutazioni delle competenze</strong>
        </div>
        <div className="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="40"
            height="40"
            focusable="false"
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
          </svg>
          <strong className="text-dark">Indicazioni per chi cerca lavoro</strong>
        </div>
      </div>

      <Button className="mt-3 ms-3 rounded-4" variant="outline-primary">
        <div className=" d-flex align-items-center gap-2">
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
          <p className="m-0">Pubblica offerta lavoro</p>
        </div>
      </Button>
    </div>
  );
};
export default JobLeftSidebar;
