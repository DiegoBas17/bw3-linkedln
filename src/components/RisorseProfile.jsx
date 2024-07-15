const RisorseProfile = () => {
  return (
    <div className="p-3 border border-1 rounded-3 mt-3 bg-white">
      <h2>Risorse</h2>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
          className="me-1"
        >
          <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z" />
        </svg>
        Solo per te
      </p>
      <div className="d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24px"
          id="people-medium"
          aria-hidden="true"
          role="none"
          fill="currentColor"
        >
          <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z" />
        </svg>
        <div className="ms-1">
          <p className="mb-1">
            <strong>La mia rete</strong>
          </p>
          <p className="mb-1">
            Salva e gestisci i tuoi collegamenti e interessi.
          </p>
        </div>
      </div>
      <div className="d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z" />
        </svg>
        <div className="ms-1">
          <p className="mb-1">
            <strong>Elementi salvati</strong>
          </p>
          <p className="mb-1">
            Monitora le tue offerte di lavoro, i corsi e gli articoli.
          </p>
        </div>
      </div>
      <hr />
      <h6 className="text-center">
        <strong>
          Mostra tutte le risorse
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height={16}
            className="ms-1"
            id="arrow-right-small"
            aria-hidden="true"
            role="none"
            data-supported-dps="16x16"
            fill="currentColor"
          >
            <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z" />
          </svg>
        </strong>
      </h6>
    </div>
  );
};
export default RisorseProfile;
