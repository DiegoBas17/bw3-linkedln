const AttivityProfile = () => {
  return (
    <div className="p-3 border border-1 rounded-3 mt-3 bg-white">
      <div className="d-flex justify-content-between">
        <div>
          <h2>Attività</h2>
          <a href="#" className="h6 text-primary text-decoration-none">
            37 follower
          </a>
        </div>
        <div>
          <button className="btn btn-outline-primary rounded-pill me-3 pt-1">
            Crea Post
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24px"
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
      <div>
        <span className="text-secondary">nome utente </span>
        <span className="text-secondary">
          ha pubblicato questo post &middot; 8 ore fa
        </span>
        <div className="d-flex">
          <img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="foto-attività"
            style={{ height: "60px", width: "60px" }}
            className="rounded-3"
          />
          <p className="ms-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            natus doloribus temporibus dolore quo alias blanditiis quis. Fuga
          </p>
        </div>
      </div>
    </div>
  );
};
export default AttivityProfile;
