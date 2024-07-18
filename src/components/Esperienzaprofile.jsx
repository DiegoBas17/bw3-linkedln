import { useDispatch } from "react-redux";
import AddExperiences from "./AddExperiences";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperiencesAction } from "../redux/actions/getExperiecesAction";
//import EditExperiences from "./EditExperiences";
//import ModificaEsperienza from "./ModificaEsperienza";
import EditExperiences from "./EditExperiences";
//import { Pencil } from "react-bootstrap-icons";

const EsperienzaProfile = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.list);

  useEffect(() => {
    dispatch(getExperiencesAction());
  }, [dispatch]);

  console.log(experiences);

  return (
    <div className="p-3 border border-1 rounded-3 mt-3 bg-white">
      <div className="d-flex justify-content-between">
        <h2>Esperienza</h2>
        <div className="d-flex justify-content-between">
          <AddExperiences style={{ cursor: "pointer" }} />

          {/*  <ModificaEsperienza /> */}

          {/* <Pencil onClick={handlePencilClick} style={{ cursor: "pointer" }} /> */}
        </div>
      </div>
      {/* qualifica 1 */}
      {experiences.map((experience) => (
        <div className="d-flex mt-3" key={experience._id}>
          <div>
            <img
              width="48"
              src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1729123200&amp;v=beta&amp;t=h5xweoh6ztkgY0_oRfROE4Q649H11tcWlMMnHpR8qok"
              loading="lazy"
              height="48"
              alt="Logo di EPICODE"
              id="ember704"
              className="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
            />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{experience.role}</h5>
              <p className="mb-0">{experience.description}</p>
              <p className="mb-0">{experience.company}</p>
              <p className="mb-0 text-secondary">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="text-secondary">{experience.area}</p>
            </div>
            <div>
              <EditExperiences experience={experience} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EsperienzaProfile;
