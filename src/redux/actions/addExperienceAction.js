//import { getExperiencesAction } from "./getExperiecesAction";
import { getExperiencesAction } from "./getExperiecesAction";
import { key } from "./getUserAction";

export const ADD_EXPERIENCE = "ADD_EXPERIENCE";

export const addExperienceAction = (userId, value) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`,
        {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + key,
          },
        }
      );
      if (resp.ok) {
        alert("Aggiunta nuova esperienza");
        dispatch({
          type: ADD_EXPERIENCE,
          payload: value,
        });
        dispatch(getExperiencesAction(userId));
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
