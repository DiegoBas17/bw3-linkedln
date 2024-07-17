import { useDispatch } from "react-redux";
import AddExperiences from "./AddExperiences";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperiencesAction } from "../redux/actions/getExperiecesAction";
import EditExperiences from "./EditExperiences";

const EsperienzaProfile = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.list);

  useEffect(() => {
    dispatch(getExperiencesAction());
  }, []);

  console.log(experiences);

  return (
    <div className="p-3 border border-1 rounded-3 mt-3 bg-white">
      <div className="d-flex justify-content-between">
        <h2>Esperienza</h2>
        <div className="d-flex justify-content-between">
          <AddExperiences />

          <EditExperiences />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            id="edit-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
            className="ms-2"
          >
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" />
          </svg> */}
        </div>
      </div>
      {/* qualifica 1 */}
      {experiences.map((experience) => (
        <div className="d-flex mt-3" key={experience._id}>
          <img
            width="48"
            src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
            loading="lazy"
            height="48"
            alt="Logo di EPICODE"
            id="ember704"
            className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
          />

          <div>
            <h5>{experience.role}</h5>
            <p className="mb-0">{experience.description}</p>
            <p className="mb-0">azienda</p>
            <p className="mb-0 text-secondary">
              {experience.startDate} - {experience.endDate}
            </p>
            <p className=" text-secondary">{experience.area}</p>
            {/* anche questo lo toglierei sono campi che vanno nella section FORMAZIONE */}
            {/* <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim.</p> */}
            {/* io lo cancellerei */}
            {/*  <p>
              <strong>
                <a href="#" className="text-decoration-none text-black">
                  competenze
                </a>
              </strong>
            </p> */}
          </div>
        </div>
      ))}
      {/* qualifica 2 */}
      {/* <div className="d-flex mt-3">
        <img
          width="48"
          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
          loading="lazy"
          height="48"
          alt="Logo di EPICODE"
          id="ember704"
          className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
        />

        <div>
          <h5>qualifica</h5>
          <p className="mb-0">tipo di impiego</p>
          <p className="mb-0">azienda</p>
          <p className="mb-0 text-secondary">periodo</p>
          <p className=" text-secondary">luogo</p>
          <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim.</p>
          <p>
            <strong>
              <a href="#" className="text-decoration-none text-black">
                competenze
              </a>
            </strong>
          </p>
        </div>
      </div> */}
    </div>
  );
};
export default EsperienzaProfile;
