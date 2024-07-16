import { API_KEY, URL_USER } from "./getUserAction";

export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
const myId = "66952362196d7b0015d6b544/";
const experiences = "experiences";

export const addExperienceAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(URL_USER + myId + experiences, {
        method: "POST",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        let experienceObj = await resp.json();
        dispatch({
          type: ADD_EXPERIENCE,
          payload: experienceObj,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
