import { key, URL_USER } from "./getUserAction";

export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";

const experiences = "experiences/";
export const deleteExperienceAction = (id, experienceId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(URL_USER + id + experiences + experienceId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
      });
      if (resp.ok) {
        alert("Esperienza Eliminata Correttamente");
        dispatch({
          type: DELETE_EXPERIENCE,
          payload: experienceId,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
export default deleteExperienceAction;
