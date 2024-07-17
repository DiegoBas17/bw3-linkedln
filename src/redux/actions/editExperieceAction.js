import { experiences, myId } from "./addExperienceAction";
import { API_KEY, URL_USER } from "./getUserAction";

export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";

export const editExperienceAction = (value) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(URL_USER + myId + experiences, {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        alert("Esperienza modificata correttamente.");
        dispatch({
          type: EDIT_EXPERIENCE,
          payload: value,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
