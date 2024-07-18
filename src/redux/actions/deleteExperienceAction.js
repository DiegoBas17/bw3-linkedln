import { API_KEY, URL_USER } from "./getUserAction";

export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";

const myId = "66952362196d7b0015d6b544/";
const experiences = "experiences/";

export const deleteExperienceAction = (experience) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(URL_USER + myId + experiences + experience._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        alert("Esperienza Eliminata Correttamente");
        dispatch({
          type: DELETE_EXPERIENCE,
          payload: experience._id,
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
